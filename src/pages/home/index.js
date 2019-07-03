import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { HomeWrapper } from './style';

class Home extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                Home!
            </HomeWrapper>
        )
    }
}

export default withRouter(Home);
