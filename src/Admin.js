import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { Row, Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftNav from './components/LeftNav';
import GlobalStyle, { AdminWrapper } from './style';
import store from './store';

export default class Admin extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <GlobalStyle />
                <AdminWrapper>
                    <Row>
                        {/* 左侧边栏 */}
                        <Col span={3} className="left-nav">
                            <LeftNav />
                        </Col>
                        {/* 右侧内容 */}
                        <Col span={21} className="main">
                            <Header />
                            <Row className="content">
                                {this.props.children}
                            </Row>
                            <Footer />
                        </Col>
                    </Row>
                </AdminWrapper>
            </Provider>
        )
    }
}