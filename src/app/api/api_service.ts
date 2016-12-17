import { Injectable } from '@angular/core';
import {Http, URLSearchParams, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {WorkExperience} from "./work_experience.model";
import {LogManager} from "../log_manager";
import {FunLink} from "./fun_link.model";
import {Interest} from "./interests.model";

@Injectable()
export class ApiService {
  private static ROOT = "http://localhost:8000";
  private headers: Headers = new Headers();

  constructor(private http: Http, private logManager: LogManager) {
    this.headers.append('Accept', 'application/json');
  }

  // grabs all WorkExperiences from api
  work_experiences() : Observable<WorkExperience[]> {
    return this.makeRequest('work_experience', '')

      // map to json and grab results
      .map(res => res.json().results);
  }

  // grabs all FunLinks from api
  fun_links(): Observable<FunLink[]> {
    return this.makeRequest('fun_links', '')

      // map to json and grab results
      .map(res => res.json().results);
  }

  // grabs all interests from api
  interests(): Observable<Interest[]> {
    return this.makeRequest('interests', '')

      // map to json and grab results
      .map(res => res.json().results);
  }

  // TODO iterate on pagination
  private makeRequest(resource:string, path: string) : Observable<Response> {

    // build URL
    let url = `${ ApiService.ROOT }/api/v1/${ resource }/${ path }`;

    // log request we are about to make
    this.logManager.log(`[${this.logManager.currentDateTime()}] \"GET ${url}\"`);

    // make request
    return this.http.get(url, {headers: this.headers})

      // log results
      .do(res => {
        this.logManager.log(
          `[${this.logManager.currentDateTime()}] HTTP${res.status} ${JSON.stringify(res.json())}`
        );
      })

      // catch errors and log those as well
      .catch(error => {
        this.logManager.log(error.toString());
        return Observable.throw(error.toString() || 'Server Error')
      });
  }
}
