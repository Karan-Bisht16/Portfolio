import ReactDOM from 'react-dom/client';
// importing providers
import { ThemeProvider } from './contexts/theme.context.jsx';
import { MobileProvider } from './contexts/mobile.context.jsx';
import { SidebarProvider } from './contexts/sidebar.context.jsx';
import { SnackbarProvider } from './contexts/snackbar.context.jsx';
// importing components
import App from './App.jsx';
// importing styling
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <MobileProvider>
            <SnackbarProvider>
                <SidebarProvider>
                    <App />
                </SidebarProvider>
            </SnackbarProvider>
        </MobileProvider>
    </ThemeProvider>
);