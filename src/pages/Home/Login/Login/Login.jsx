import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../provider/AuthProvider';
import { useState } from 'react';

const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/category/0";

    const handleLoginBtn = (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        console.log(email, password)
        loginUser(email, password)
        .then(result => {
            const loggedUser = result.user
            setSuccess('User Logged In Success!')
            navigate(from , { replace: true })
        })
        .catch(error => {
            setError(error.message)
        })
    }
    return (
        <Container className='w-25 mx-auto'>
            <Form onSubmit={handleLoginBtn}>
                <h3 className='text-center'>Please Login</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email'/>
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password'/>
                </Form.Group>
                
                <Button className='mb-2' variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-muted text-secondary">
                    Don't have an account? <Link to='/register'>Register</Link><br />
                </Form.Text>
                <Form.Text className="text-muted text-success">
                    {success}
                </Form.Text>
                <Form.Text className="text-muted text-danger">
                    {error}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;