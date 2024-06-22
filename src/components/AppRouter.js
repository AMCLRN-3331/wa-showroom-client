import React, { useContext } from "react";

import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, authRoutes, specRoutes } from "../routes";
import Main from '../pages/Main';
import { Context } from "..";

const AppRouter = () => {
    const {user} = useContext(Context);
    return (
        <Routes>
            {
                console.log(user)
            }
            {
                user.user.role === 'ADMIN' && authRoutes.map(({path, Component}) => <Route key={path} path={path} element={<Component/>} exact/>)
            }
            {
                user?.user?.role === 'SPEC' && specRoutes.map(({path, Component}) => <Route key={path} path={path} element={<Component/>} exact/>)
            }
            {
                publicRoutes.map(({path, Component}) => <Route key={path} path={path} element={<Component/>} exact/>)
            }
            
            <Route path="*"
                    element={ <Navigate to="/" /> }
                />
            
        </Routes>
        
    );
}

export default AppRouter;