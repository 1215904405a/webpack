import React from 'react';
import ListPage from 'src/components/listpage';

const data = [
    { name: 'react-context', url: '/react/reactcontext' },
    { name: 'react-lazy', url: '/react/reactlazy' },
];

const title = 'react相关'

const subTitle = ''

export default function Home() {
    return <ListPage data={data} title={title} subTitle={subTitle} />
};
