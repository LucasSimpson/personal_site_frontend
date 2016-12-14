import { Injectable } from '@angular/core';
import {Http, URLSearchParams, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {WorkExperience} from "./work_experience.model";
import {LogManager} from "../log_manager";

@Injectable()
export class WorkExperienceService {
  private static ROOT = "http://localhost:8000";

  constructor(private http: Http, private logManager: LogManager) {}

  all() : Observable<WorkExperience[]> {
    return this.makeRequest('')
      .map(res => res.json().results);
  }

  private makeRequest(path: string) : Observable<Response> {
    let url = `${ WorkExperienceService.ROOT }/api/v1/work_experience/${ path }`;

    this.logManager.log(`[${this.logManager.currentDateTime()}] \"GET ${url}\"`);

    return this.http.get(url)
      .do(res => {
        this.logManager.log(
          `[${this.logManager.currentDateTime()}] HTTP${res.status} ${JSON.stringify(res.json())}`
        );
      })
      .catch(error => {
        this.logManager.log(error.toString());
        return Observable.throw(error.json().error || 'Server Error')
      });
  }
}
