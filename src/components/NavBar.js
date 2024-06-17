import React, { useContext } from 'react';
import { Context } from '..';
import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const history = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        history('/');
    }

    return (

        <Navbar className='Main-NavBar' fixed='top'>
            
                <Navbar.Brand href="/">WHITEAUTO</Navbar.Brand>
                
                <Nav>
                    <Nav.Link href="/catalog">Каталог</Nav.Link>
                    <Nav.Link href="/about">О нас</Nav.Link>
                    <Nav.Link href="/license">Лицензия</Nav.Link>
                </Nav>
            
        </Navbar>
    );
})

export default NavBar;