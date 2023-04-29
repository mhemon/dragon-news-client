import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';

const NavigationBar = () => {
    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <Container className='mb-3'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link>
                                <Link className='text-decoration-none text-black font-bold' to='/category/0'>Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='text-decoration-none text-black font-bold' to='/category/0'>About</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='text-decoration-none text-black font-bold' to='/'>Career</Link>
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            {user && <Nav.Link> <FaUserCircle style={{ fontSize: '2rem' }} /> </Nav.Link>}
                            <Nav.Link>
                                {user ? <Button onClick={handleLogout} variant="dark">Logout</Button> :
                                    <Link to='/login'><Button variant="dark">Login</Button></Link>}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;