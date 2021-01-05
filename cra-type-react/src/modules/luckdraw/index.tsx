import React from 'react';

// 创建类型接口 尽量公用
export interface IName {
    value: string
}
let rel = [];
const getNum = function (): number {
    const num = parseInt((Math.random() * 10) + '', 10) + 1;
    const name: HTMLElement = document.getElementById('name') as HTMLElement;
    if (!name['value']) {
        alert('请输入对应姓名');
        return 0;
    }
    fetch('/api/luckdraw?name=' + name['value'] + '&num=' + num).then((res) => {
        return res.json();

    }).then((res) => {
        let ress = res
        rel = [];
        if (res.message) {
            alert(res.message);
            ress = res.obj
        } else {
            alert('恭喜你抽到了 ' + num + ', 结果已经保存！');
        }

        for (let key in ress) {
            rel.push({
                name: key,
                num: ress[key]
            })
        }
        console.log(rel);
        const str = rel.map((item) => {
            return `<p>${item.name}: ${item.num}</p>`;
        })
        const result: HTMLElement = document.getElementById('result') as HTMLElement;
        result.innerHTML = '';
        result.innerHTML = '结果：' + str;

    })
    return num;
}


export default function LuckDraw() {
    return (
        <div>
            姓名： <input id="name" />
            <button onClick={getNum}>抽签</button>

            <div id="result">

            </div>
        </div>
    )
};
