import React, { Component } from 'react';

class NoMatch extends Component {

    public render() {
        return (
            <div className="no-match text-center">
                <div className="mark">
                    <img width="197" height="98" src="//img1.qdingnet.com/a93623660fa443e00a6a2fbbf3578635.png" alt="空白" />
                </div>
                <h3 className="title">Oops!</h3>
                <div className="describe">页面未找到</div>
            </div>
        );
    }
}
export default NoMatch
