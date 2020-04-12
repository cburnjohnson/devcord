export default (state, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                ...state,
                messages: [action.payload, ...state.messages]
            };
        case 'LOGOUT':
            return {
                ...state,
                messages: []
            };
        default:
            return state;
    }
};
