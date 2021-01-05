import React, { Component, Fragment } from 'react';
import {
    PageHeader, List,
    // Typography 
} from 'antd';

const data = [
    '1、commonjs 规范只定义了exports，而 module.exports是nodejs对commonjs的实现，实现往往会在满足规范前提下作些扩展，我们这里把这种实现称为了commonjs2',
    '2、module.exports 是nodejs对commonjs的具体实现。exports 只是它的一个别名。搞不清楚关系的时候可以不用这个别名。',
];

class ReactLazy extends Component {

    public render() {
        return (
            <Fragment>
                <PageHeader
                    className="site-page-header"
                    // onBack={() => null}
                    title="common.js"
                    subTitle=""
                />
                <br />
                <List
                    header={undefined}
                    footer={undefined}
                    bordered={true}
                    dataSource={data}
                    // tslint:disable-next-line: jsx-no-lambda
                    renderItem={item => (
                        <List.Item className="p10">
                            {item}
                        </List.Item>
                    )}
                    className="p20"
                />
            </Fragment>
        );
    }
}

export default ReactLazy;
