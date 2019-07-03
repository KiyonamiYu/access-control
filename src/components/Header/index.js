import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import { HeaderWrapper, TodayInfo } from './style';
import { actionCreators } from './store';


class Header extends PureComponent {

    render() {
        const { username, nowTime, weather } = this.props;
        return(
            <HeaderWrapper>
                <Row className="header-top">
                    <Col span={24}>
                            <span>欢迎，{username}</span>
                            <a href="/">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="bradcrumb-title">
                        首页
                    </Col>
                    <Col span={20}>
                        <TodayInfo>
                            <span className="time">{nowTime}</span>
                            <span className="weather">{weather}</span>
                        </TodayInfo>
                    </Col>
                </Row>
            </HeaderWrapper>
        )
    }
    componentDidMount() {
        const {updateTime, getWeatherData} = this.props;
        updateTime();
        getWeatherData();
    }

}

const mapStateToProps = (state) => ({
    username: state.getIn(['header', 'username']),
    nowTime: state.getIn(['header', 'nowTime']),
    weather: state.getIn(['header', 'weather']),
})

const mapDispatchToProps = (dispatch) => ({
    updateTime: () => {
        setInterval(() => {
            dispatch(actionCreators.updateTimeAction());
        }, 1000);
    },
    getWeatherData: () => {
        dispatch(actionCreators.getWeatherDataAction());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));