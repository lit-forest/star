import http from 'utils/http';

export function getData(id) {
    return http.get('/test')
}
