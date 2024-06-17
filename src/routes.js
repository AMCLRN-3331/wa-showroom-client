import Auth from './pages/Auth';
import Main from './pages/Main';
import Admin from './pages/Admin';
import About from './pages/About';
import AutoPage from './pages/AutoPage';
import Catalog from './pages/Catalog';
import License from './pages/License';

export const authRoutes = [
    {
        path: '/admin',
        Component: Admin
    }
];


export const publicRoutes = [
    {
        path: '/',
        Component: Main
    }, 
    {
        path: '/login',
        Component: Auth
    },
    {
        path: '/about',
        Component: About
    },
    {
        path: '/auto/:id',
        Component: AutoPage
    },
    {
        path: '/catalog',
        Component: Catalog
    },
    {
        path: '/license',
        Component: License
    },
];