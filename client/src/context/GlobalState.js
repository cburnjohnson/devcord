import React, { createContext, useReducer } from 'react';
import GlobalReducer from './GlobalReducer';

const initialState = {
    messages: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    function addMessage(message) {
        dispatch({ type: 'ADD_MESSAGE', payload: message });
    }

    return (
        <GlobalContext.Provider
            value={{ messages: state.messages, addMessage }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
