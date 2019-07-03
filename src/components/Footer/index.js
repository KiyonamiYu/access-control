import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { FooterWrapper } from './style';

class Footer extends PureComponent {
    render() {
        return (
            <FooterWrapper>
                版权所有：秃头披风侠粉丝后援团&KiyonamiYu（推荐使用谷歌浏览器，可以获得更佳操作页面体验） 技术支持：KiyonamiYu
            </FooterWrapper>
        )
    }
}

export default withRouter(Footer);
