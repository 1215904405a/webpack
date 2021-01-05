import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
    PageHeader, List,
    // Typography 
} from 'antd';

// 接口
interface IProps {
    title: string,
    subTitle: string,
    data: any[],
}

export default function ListPage(props: IProps) {
    const { title, data, subTitle } = props;
    return (
        <Fragment>
            <PageHeader
                className="site-page-header"
                // onBack={() => null}
                title={title}
                subTitle={subTitle}
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
                        {typeof item === 'object' &&
                            <Link to={item.url}>{item.name}</Link>
                        }
                        {typeof item === 'string' && item}
                    </List.Item>
                )}
                className="p20"
            />
        </Fragment>
    );
}