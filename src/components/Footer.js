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
    }
    return(
        <Navbar bg="dark" variant="dark" className="footer-bar" >
            
            <Navbar.Brand href="/">WHITEAUTO</Navbar.Brand>
            <p style={{color: 'gray'}}>Дипломный проект</p>
               
                {user.isAuth ? 
                <Navbar.Collapse className="justify-content-end">
                    <Button className="mr-2" variant='outline-light' onClick={() => history('/admin')}>Админка</Button>
                    <Button className="mr-4" variant='outline-light' onClick={() => logOut()}>Выйти</Button>
                </Navbar.Collapse>
                :
                <Navbar.Collapse className="justify-content-end">
                    <Button className="mr-2" variant='outline-light' onClick={() => history('/login')}>Авторизация</Button>
                </Navbar.Collapse>
                }
            
        </Navbar>
    );
});

export default Footer;