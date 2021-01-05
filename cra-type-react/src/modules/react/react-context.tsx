import React, { Component, Fragment } from 'react';
import {
    PageHeader, List,
    // Typography 
} from 'antd';

const data = [
    'const value = useContext(MyContext);',
    '1、hook useContext(MyContext)',
    '2、class static contextType = MyContext',
    '3、<MyContext.Consumer>',
    '参考：https://zh-hans.reactjs.org/docs/hooks-reference.html',
];

class ReactLazy extends Component {

    public render() {
        return (
            <Fragment>
                <PageHeader
                    className="site-page-header"
                    // onBack={() => null}
                    title="context 上下文使用"
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
                {/* <div className="content" /> */}
            </Fragment>
        );
    }
}

export default ReactLazy;
