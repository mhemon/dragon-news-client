import React from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col lg={3} sm>
                        <LeftNav/>
                    </Col>
                    <Col lg={6} sm>
                        <div>Main Container......</div>
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