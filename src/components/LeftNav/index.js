import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Menu } from 'antd';

const { SubMenu } = Menu;

class LeftNav extends Component {
    constructor(props) {
        super(props);
        this.renderMenu = this.renderMenu.bind(this);
    }

    render() {

        const { menuList } = this.props;
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo.svg" alt="" />
                    <h1>Access Control</h1>
                </div>
                <Menu
                    theme="dark"
                >
                    {this.renderMenu(menuList)}
                </Menu>
            </div>
        )
    }

    componentDidMount() {
        this.props.getMenuListData();
    }

    renderMenu(data) {
        return data.map((itme) => {
            console.log(itme.title);
            if(itme.children === undefined) {
                return (<Menu.Item key={itme.key}>{itme.title}</Menu.Item>);
            }
            return (
                <SubMenu 
                    key={itme.key} 
                    title={itme.title}
                > 
                    {this.renderMenu(itme.children)}
                </SubMenu>
            );
        });
    }
}

const mapStateToProps = (state) => ({
    menuList: state.getIn(['leftNav', 'menuList']).toJS(),
})

const mapDispatchToProps = (dispatch) => ({
    getMenuListData() {
        dispatch(actionCreators.getMenuListAction());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(LeftNav);

