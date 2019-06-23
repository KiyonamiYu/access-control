import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Row, Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftNav from './components/LeftNav';
import GlobalStyle, { AdminWrapper } from './style';
import store from './store';

export default class Admin extends Component {
    render() {
        return (
            <Provider store={store}>
                <GlobalStyle />
                <AdminWrapper>
                    <Row>
                        <Col span={4} className="left-nav">
                            <LeftNav />
                        </Col>
                        
                        <Col span={20} className="main">
                            <Header />
                            <Row  className="content">
                                Content
                            </Row>
                            <Footer />
                        </Col>
                    </Row>
                </AdminWrapper>
            </Provider>
        )
    }
}