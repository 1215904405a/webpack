import React, { Component } from 'react';
import {
  // Spin,
  Skeleton,
} from 'antd';

class Loading extends Component {

  render() {
    return (
      <div className="">
        {/* <Spin tip="Loading..." /> */}
        <Skeleton active={true} paragraph={{ rows: 10, width: 1000 }} />
      </div>
    );
  }
}

export default Loading;
