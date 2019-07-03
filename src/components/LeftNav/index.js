import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { actionCreators } from './store';
import { Menu } from 'antd';

const { SubMenu } = Menu;

class LeftNav extends PureComponent {
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
        return data.map((item) => {
            if(item.children === undefined) {
                return (
                <Menu.Item key={item.key}>
                    <Link to={item.key}>{item.title}</Link>
                </Menu.Item>);
            }
            return (
                <SubMenu 
                    key={item.key} 
                    title={item.title}
                > 
                    {this.renderMenu(item.children)}
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LeftNav));

