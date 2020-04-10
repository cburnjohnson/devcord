import React from 'react';
import { GlobalProvider } from './src/context/GlobalState';
const wrapRootElement = ({ element }) => (
    <GlobalProvider>{element}</GlobalProvider>
);

export { wrapRootElement };
