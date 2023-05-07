// import {
//     ApiPath,
//     PostsApiPath,
//     HttpMethod,
//     ContentType
//   } from 'common/enums/enums';

import { ApiPath, HttpMethod } from "../../common/enums/enums";

  class Event {
    constructor({ apiPath, http }) {
      this._apiPath = apiPath;
      this._http = http;
    }
  
    getAllEvents() {
      return this._http.load(`${this._apiPath}${ApiPath.EVENTS}`, {
        method: HttpMethod.GET,
        
      });
    }
  
  
  
    
  
   
  
   
  
  }
  
  export { Event };