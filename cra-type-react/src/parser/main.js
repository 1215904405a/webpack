/**
 * 王永 2020-10-15
 * 获取组件
 */

// 获取组件
export function getComponents() {
    const context = require.context('src/components', false, /.\.tsx$/)
    const moduleStores = {}
    context.keys().forEach(key => {
        //截取文件名  ./test.tsx ====> test
        const fileName = key.slice(2, -4);

        // context作为一个函数,也接受一个req参数,这个和resolve方法的req参数是一样的
        // 传入key值获取对应模块，因为是export default导出的，所以default属性包含模块内容
        const fileModule = context(key).default;

        if (fileName === 'index') {
            return;
        }
        //将模块解构挂载moduleStores对应的属性上，
        // console.log(fileModule)
        moduleStores[fileName] = {
            ...fileModule,
            namespaced: true,
        };
    });
    return moduleStores
}