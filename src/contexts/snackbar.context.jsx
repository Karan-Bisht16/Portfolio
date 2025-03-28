import { createContext, useState } from 'react';

export const SnackbarContext = createContext();
export const SnackbarProvider = ({ children }) => {
    // Check initial screen size
    const [snackbarValue, setSnackbarValue] = useState({
        status: '',
        message: ''
    });
    const [snackbarState, setSnackbarState] = useState();
    const closeSnackbar = () => {
        setSnackbarState(false);
    };

    const openSnackbar = (data) => {
        closeSnackbar();
        const { message, status } = data;
        if (!message || !status) {
            console.error('No message or status provided.');
            return;
        }

        setSnackbarState(true);
        setSnackbarValue(data);
    };

    return (
        <SnackbarContext.Provider value={{ snackbarState, snackbarValue, openSnackbar, closeSnackbar }}>
            {children}
        </SnackbarContext.Provider>
    );
};