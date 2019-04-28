const axios = require('axios');
const XDEBUG = '?XDEBUG_SESSION_START=PHPSTORM';
const debug = false;

function handle(response) {
    if (response.status !== 200){
        throw response.status;
    }
    return response.data;
}

export function callAPI(endpoint, method, body){
    if (debug){
        endpoint += XDEBUG;
    }
    return axios({
        method: method,
        data: body,
        url:endpoint,
        responseType:'json'
      }).then(handle);
}