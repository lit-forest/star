import axios from 'axios';

function get(url, params) {
    return axios.get(url, { params })
        .then(checkStatus)
        .then(checkFileType)
        .then(checkCode)
        .catch(throwErr)
}
function checkStatus(res) {
    if (res.status >= 200 && res.status < 300) {
        return res;
    }
    return res.data.json().then(json => handleError(res.status, json))
}

function checkFileType(res) {
    if (res.config.headers['content-type'] === 'text/csv') {
        res.blob().then(blob => {
            const a = document.createElement('a');
            const url = window.URL.createObjectURL(blob);
            const fileNameStr = res.config.headers['content-disposition'];
            const fileName = fileNameStr.replace('attachment;filename=', '');
            a.href = url;
            a.download = decodeURIComponent(fileName);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        return { code: 0 }
    }
    return res;
}

function checkCode(res) {
    if (res.data.code !== 200) {
        return handleError(res.code, res);
    }
    return res;
}

function handleError(code, res = '') {
    const error = new Error();
    error.code = code;
    error.response = res;
    throw error;
}

function throwErr(res) {
    console.log(res)
}

export default {
    get
}
