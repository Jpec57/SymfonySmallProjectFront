import {callAPI} from './wsService';

export function getArticles(){
    return callAPI('/api/blog/articles', 'GET', null)
}

export function getArticle(id){
    return callAPI('/api/blog/articles/' + id, 'GET', null)
}

export function createArticle(body){
    return callAPI('/api/blog/articles', 'POST', body)
}