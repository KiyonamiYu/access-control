import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Admin from './admin';
import Login from './pages/login';
import NoMatch from './pages/noMatch';
import Home from './pages/home';

/**
 * !!!
 * 不同页面布局 分别为 /common /login /admin （相当于整个 App 的 子路由）
 * 在 admin 中 拥有子路由 /home /ui/butons ...
 * 在 admin 中 使用 this.props.children 进行路由填充。例如当路由选择了 home ，则在 admin content 下放置 home 的内容。
 */
export default class Router extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/" render={() => (
                        <Admin>
                            <Switch>
                                <Route path="/home" component={Home}></Route>
                                <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                     )}>
                    </Route>
                </Switch>
            </HashRouter>
        )
    }
}
