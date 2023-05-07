import { Event } from './event/event.service.js';
import { Http } from './http/http.service.js';
const {  REACT_APP_API_PATH } = process.env;
//const baseApi='http://localhost:5000/api';
const http = new Http({});
const event = new Event({
    apiPath: REACT_APP_API_PATH,
    http
})

export {http, event}