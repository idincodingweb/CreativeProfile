import React from 'react';
import '../assets/style/Banner.css';
import Images from '../assets/images/profile.png';
import { Container, Row, Col } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <Row className="align-items-center mt-4 mb-4">
                    <Col xs={12} md={6} className="banner-left p-4">
                        <img 
                            src={Images} 
                            alt="Profile" 
                            className="profile-img"
                        />
                    </Col>
                    <Col xs={12} md={6} className="banner-right p-4">
                        <p className="intro-text">Hallo Im Idin 암호 👋</p>
                        <h1 className="title-text">Front End Dev.</h1>
                        <p className="description-text">이것은 프론트 엔드 개발에 대한 나의 기술과 프로젝트를 보여주는 포트폴리오입니다.</p>
                        <button className="readmore-button">Read Me</button>
                    </Col>
                </Row>
            </Container>
            <div className="banner-line"></div>
        </div>
    );
};

export default Banner;