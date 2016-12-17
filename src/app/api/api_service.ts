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
  private static ROOT = "https://lucassimpson.com";
  private headers: Headers = new Headers();

  private cachedWorkExperiences: WorkExperience[] = null;
  private cachedFunLinks: FunLink[] = null;
  private cachedInterests: Interest[] = null;

  constructor(private http: Http, private logManager: LogManager) {
    this.headers.append('Accept', 'application/json');

    // cache all calls right away
    this.work_experiences();
    this.fun_links();
    this.interests();
  }

  // grabs all WorkExperiences from api
  work_experiences() : Observable<WorkExperience[]> {
    if (this.cachedWorkExperiences == null) {
      return this.makeRequest('work_experience', '')

        // map to json and grab results
        .map(res => res.json().results)

        // cache results
        .do(results => {
          this.cachedWorkExperiences = results;
        });
    } else {
      return Observable.of(this.cachedWorkExperiences);
    }
  }


  // grabs all FunLinks from api
  fun_links(): Observable<FunLink[]> {
    if (this.cachedFunLinks == null) {
      return this.makeRequest('fun_links', '')

        // map to json and grab results
        .map(res => res.json().results)

        // cache results
        .do(results => {
          this.cachedFunLinks = results;
        });
    } else {
      return Observable.of(this.cachedFunLinks);
    }
  }


  // grabs all interests from api
  interests(): Observable<Interest[]> {
    if (this.cachedInterests == null) {
      return this.makeRequest('interests', '')

        // map to json and grab results
        .map(res => res.json().results)

        // cache results
        .do(results => {
          this.cachedInterests = results;
        });
    } else {
      return Observable.of(this.cachedInterests);
    }
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
