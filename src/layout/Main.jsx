import React from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header />
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={3} sm style={{position: 'relative'}}>
                        <div style={{position: 'sticky', top: '20px'}}>
                        <LeftNav/>
                        </div>
                    </Col>
                    <Col lg={6} sm>
                        <Outlet/>
                    </Col>
                    <Col lg={3} sm>
                        <RightNav/>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Main;