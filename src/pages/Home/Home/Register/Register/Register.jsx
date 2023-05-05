import React, { useState } from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import useTitle from '../../../../../hooks/useTitle';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [checked, setChecked] = useState(false)

    useTitle('Register')

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        const accept = form.accept.value

        console.log(name, photo, email, password, accept)
        createUser(email, password)
        .then(result => {
            const currentUser = result.user
            console.log(currentUser)
            // update user profile information
            updateProfile(currentUser, {
                displayName: name,
                photoURL: photo
            })
            .then(result => {
                navigate('/category/0')
            })
            .catch(error => {
                console.log(error)
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleCheckBox = (event) => {
        const isChecked = event.target.checked
        setChecked(isChecked)
    }
    return (
        <Container className='w-25 mx-auto'>
            <Form onSubmit={handleSubmit}>
                <h3 className='text-center'>Please Register</h3>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" name='name' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter photo url" name='photo' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleCheckBox} type="checkbox" label={<>Accept <Link to='/terms'>Terms and Condition</Link></>} name='accept' />
                </Form.Group>
                <Button disabled={!checked} className='mb-2' variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-muted text-secondary mb-2">
                    Alreday have an account? <Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className="text-muted text-success">

                </Form.Text>
                <Form.Text className="text-muted text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;