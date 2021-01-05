// TODO: 文件自动生成
import React from 'react';
import loadable from '@loadable/component';
import Loading from 'src/components/loading';

const ReactCom = loadable(
    () => import(/* webpackChunkName: "reactlazy" */ 'src/modules/react'),
    {
        fallback: <Loading />
    }
);

const NodeSsl = loadable(
    () => import(/* webpackChunkName: "nodessl" */ 'src/modules/node-ssl'),
    {
        fallback: <Loading />
    }
);


const Commonjs = loadable(
    () => import(/* webpackChunkName: "commonjs" */ 'src/modules/common-js'),
    {
        fallback: <Loading />
    }
);

const Pm2 = loadable(
    () => import(/* webpackChunkName: "commonjs" */ 'src/modules/pm2'),
    {
        fallback: <Loading />
    }
);

const LuckDraw = loadable(
    () => import(/* webpackChunkName: "luckdraw" */ 'src/modules/luckdraw'),
    {
        fallback: <Loading />
    }
);

const RefereHost = loadable(
    () => import(/* webpackChunkName: "luckdraw" */ 'src/modules/refereandhost'),
    {
        fallback: <Loading />
    }
);

const routes = [
    { path: '/react', component: ReactCom },
    { path: '/nodessl', component: NodeSsl, exact: true },
    // { path: '/reactcontext', component: ReactContext, exact: true },
    { path: '/commonjs', component: Commonjs, exact: true },
    { path: '/pm2', component: Pm2, exact: true },
    { path: '/luckdraw', component: LuckDraw, exact: true },
    { path: '/refereandhost', component: RefereHost, exact: true },
];

export default routes;
