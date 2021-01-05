import React from 'react';
import ListPage from 'src/components/listpage';

const data = [
    '1、请求头refere、host会作为判断当前请求来自的域名和被谁打开，简单的排除非法请求',
    '2、代理设置请求头可以绕过refere、host检查'
];

const title = 'refereandhost'

const subTitle = ''

export default function RefereHost() {
    return <ListPage data={data} title={title} subTitle={subTitle} />
};
