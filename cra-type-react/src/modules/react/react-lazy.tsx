import React, { Component, Fragment } from 'react';
import {
    PageHeader, List,
    // Typography 
} from 'antd';

const data = [
    '1、React.lazy是react官方支持的（https://reactjs.org/docs/code-splitting.html#reactlazy）',
    '2、@loadable/component，支持SSR',
    '3、react-loadable使用时间长，对webpack4支持不是很好',
    '推荐使用1或者2',
    '参考：https://loadable-components.com/docs/loadable-vs-react-lazy/#note-about-react-loadable',
];

class ReactLazy extends Component {

    public render() {
        return (
            <Fragment>
                <PageHeader
                    className="site-page-header"
                    // onBack={() => null}
                    title="Comparison with React.lazy"
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
