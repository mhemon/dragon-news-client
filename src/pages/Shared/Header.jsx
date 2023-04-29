import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import NavigationBar from './NavigationBar/NavigationBar';


const Header = () => {
    
    return (
        <Container className='mb-3'>
            <div className='text-center'>
                <img className='img-fluid' src={logo} alt="" />
                <h6 className='text-secondary'>Journalism Without Fear or Favour</h6>
                <h6>{moment().format('dddd, MMMM D, YYYY')}</h6>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={100}>
                    I can be a React component, multiple React components, or just some text.
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;