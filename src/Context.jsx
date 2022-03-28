import React from 'react';


export const Context = React.createContext({
    authenticated: false, 
    setAuthenticated: () => {}, 
    nameUser: '', 
    setNameUser: () => {}
});