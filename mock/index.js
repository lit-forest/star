import Mock from 'mockjs';

Mock.mock('/test', 'get', {
    code: 200,
    data: {
        'list|1-10': [{
            'id|+1': 1
        }]
    },
    mes: '成功'
})