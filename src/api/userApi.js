import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

/* eslint-disable no-console */
export function getUsers() {
    return get('users');
}

function get(url) {
    return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response) {
    // doing some log
    /*
    console.log(response.headers.get('Content-Type'));
    console.log(response.header.get('Date'));
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.type);
    console.log(response.url);
    */
    return response.json();
}

function onError(error) {
    console.log(error); // eslint-disable-line no-console
}
