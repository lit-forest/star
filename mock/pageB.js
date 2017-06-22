import Mock from 'mockjs';

export let a = Mock.mock('/test/hello', 'get', {
    code: 200,
    data: {
        'list|5-10': [{
            'name|+1': 1
        }]
    },
    mes: '成功'
})

export let b = Mock.mock('/test/hello/kitty', 'get', {
    code: 200,
    data: {
        'list|5-10': [{
            'kitty|+1': 1
        }]
    },
    mes: '成功'
})