import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

class NoMatch extends PureComponent {
    render() {
        return (
            <div>
                404 Not Found!!!
            </div>
        )
    }
}

export default withRouter(NoMatch);
