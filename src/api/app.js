import http from 'utils/http';

export function getData(id) {
    return http.get('/test')
}

export function getDataTest(id) {
    return http.get('/test/hello')
}

export function getDataHelloKitty(id) {
    return http.get('/test/hello/kitty')
}

export function getPois(params) {
    return http.get('http://restapi.amap.com/v3/place/text', params)
}