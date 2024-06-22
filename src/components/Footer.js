import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";
import { Button, Container, Navbar } from "react-bootstrap";

const Footer = observer(() => {
    const { user } = useContext(Context);
    const history = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        history('/');
        localStorage.removeItem('token');
    }
    return(
        <Navbar bg="dark" variant="dark" className="footer-bar" >
            
            <Navbar.Brand href="/">WHITEAUTO</Navbar.Brand>
            <p style={{color: 'gray'}}>Дипломный проект</p>
               
                {user.isAuth && user.user.role === 'ADMIN' ? 
                <Navbar.Collapse className="justify-content-end">
                    <Button className="mr-sm-2" variant='outline-secondary' size="sm" onClick={() => history('/admin')}>Для администратора</Button>
                    <Button className="mr-sm-2" variant='outline-secondary' size="sm" onClick={() => logOut()}>Выйти</Button>
                </Navbar.Collapse>
                : user.isAuth && user.user.role === 'SPEC' ?
                <Navbar.Collapse className="justify-content-end">
                    <Button className="mr-sm-2" variant='outline-secondary' size="sm" onClick={() => history('/spec')}>Для специалистов</Button>
                    <Button className="mr-sm-2" variant='outline-secondary' size="sm" onClick={() => logOut()}>Выйти</Button>
                </Navbar.Collapse>:
                <Navbar.Collapse className="justify-content-end">
                    <Button className="mr-sm-2" variant='outline-secondary' size="sm" onClick={() => history('/login')}>Авторизация</Button>
                </Navbar.Collapse> 
                }
            
        </Navbar>
    );
});

export default Footer;