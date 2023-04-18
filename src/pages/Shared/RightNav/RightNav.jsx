import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitterSquare, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'
import './RightNav.css'

const RightNav = () => {
    return (
        <div>
            {/* login with section */}
            <div>
                <h5>Login With</h5>
                <Button variant='outline-primary w-100 mb-2'> <FaGoogle /> Login with Google</Button>
                <Button variant='outline-secondary w-100'> <FaGithub /> Login with Github</Button>
            </div>
            {/* Find us on */}
            <div className='my-3'>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook color='blue' size='1.2em'/> <span className='ms-2'>Facebook</span></ListGroup.Item>
                    <ListGroup.Item> <FaTwitterSquare color='blue' size='1.2em'/> <span className='ms-2'>Twitter</span></ListGroup.Item>
                    <ListGroup.Item> <FaInstagram color='red' size='1.2em'/> <span className='ms-2'>Instagram</span></ListGroup.Item>
                </ListGroup>
            </div>
            {/* Q zone */}
            <Qzone/>
            <div className='bg-img text-white text-center py-5 mt-4'>
                <h2>Create an Amazing Newspaper</h2>
                <p className='px-4 text-justify'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button className='mt-2' variant="danger">Learn More</Button>
            </div>
        </div>
    );
};

export default RightNav;