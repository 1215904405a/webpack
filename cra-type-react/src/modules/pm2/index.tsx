import React from 'react';
import ListPage from 'src/components/listpage';

const data = [
    '1、安装：npm install pm2 -g',
    '2、启动：pm2 start app.js --name demo  pm2 start app.sh pm2 start app.py',
    '3、停止：pm2 stop all pm2 stop [AppName] pm2 stop [ID]',
    '4、删除：pm2 delete all pm2 delete [AppName] pm2 delete [ID]',
    '5、更新：pm2 update',
    '6、监听：pm2 start app.js --watch    //当文件发生变化，自动重启',
    '7、静态服务器：pm2 serve ./dist 9090        //将目录dist作为静态服务器根目录，端口为9090',
    `8、启用群集模式（自动负载均衡）:
    //max 表示PM2将自动检测可用CPU的数量并运行尽可能多的进程
    //max可以自定义，如果是4核CPU，设置为2者占用2个
    pm2 start app.js -i max
    `,
    '9、重启：pm2 restart app.js',
    `10、0秒停机重新加载：pm2 reload app.js  //重新启动所有进程，始终保持至少一个进程在运行
    pm2 gracefulReload all   //优雅地以群集模式重新加载所有应用程序`,
    '11、查看列表：pm2 list',
    '12、查看每个应用程序占用：pm2 monit',
    '13、显示应用程序所有信息: pm2 show [Name] //根据name查看   pm2 show [ID] //根据id查看',
    '14、日志查看：pm2 logs //查看所有应用日志  pm2 logs [Name] //根据指定应用名查看应用日志 pm2 logs [ID] //根据指定应用ID查看应用日志',
    '15、保存当前应用列表：pm2 save',
    '16、配置文件简化部署流程用pm2 deploy 参考：https://pm2.keymetrics.io/docs/usage/deployment/#simple-deploy',
];

const title = 'pm2'

const subTitle = ''

export default function Pm2() {
    return <ListPage data={data} title={title} subTitle={subTitle} />
};
