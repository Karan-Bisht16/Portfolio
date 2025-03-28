import { useContext } from 'react';
import {
    BrowserRouter as Router,
    Routes, Route,
    Navigate
} from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
// importing contexts
import { ThemeContext } from './contexts/theme.context';
import { SnackbarContext } from './contexts/snackbar.context';
// importing pages
import Home from './pages/home.page';
import Project from './pages/project.page';
// importing components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import SocialLinks from './components/SocialLinks';
// importing subcomponents
import Snackbar from './components/subcomponents/Snackbar.jsx';

const App = () => {
    const { theme } = useContext(ThemeContext);
    const { snackbarState, snackbarValue } = useContext(SnackbarContext);

    return (
        <div className={theme}>
            <Router>
                <NavBar />
                <SocialLinks />
                <Sidebar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/project/:id' element={<Project />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
                <Footer />
            </Router>
            <Snackbar
                open={snackbarState}
                message={snackbarValue.message}
                status={snackbarValue.status}
            />
            <Analytics />
        </div>
    );
}

export default App;