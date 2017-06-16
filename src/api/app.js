import http from 'utils/http';

export function getData(id) {
    return http.get('/test')
}

export function getPois(params) {
    return http.get('http://restapi.amap.com/v3/place/text', params)
}