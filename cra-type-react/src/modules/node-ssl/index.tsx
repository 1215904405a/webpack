import React, { Component, Fragment } from 'react';
import {
    PageHeader, List,
    // Typography 
} from 'antd';

const data = [
    '1、自己生成证书，一般浏览器不识别，会有确认才能访问；参考：https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener https://flaviocopes.com/express-https-self-signed-certificate/',
    '2、https服务一定的要默认443端口，http默认80端口，阿里云安全组记得433端口',
    '3、https证书阿里云有免费版本可以用于测试，node是下载“其他证书里”',
];

class ReactLazy extends Component {

    public render() {
        const code = `
        代码示例：
        const options = {
            key: fs.readFileSync('./xxx.key'),
            cert: fs.readFileSync('./xxx.pem')
        }
        https.createServer(options, app.callback()).listen(port, () => {
            const decorator = new Array(40).fill('*').join('');
            console.info(colors.cyan(decorator));
            console.info(colors.green('成功: 服务已经启动, http:// localhost'));
                console.info(colors.cyan(decorator));
        })`
        return (
            <Fragment>
                <PageHeader
                    className="site-page-header"
                    // onBack={() => null}
                    title="koa搭建https"
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
                <pre><code>{code}</code></pre>
                {/* <div className="content" /> */}
            </Fragment>
        );
    }
}

export default ReactLazy;
