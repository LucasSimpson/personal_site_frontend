import {Injectable, OnInit} from "@angular/core";
import {Observable, Subject} from "rxjs";

@Injectable()
export class LogManager {
  private _stream: Subject<string>;

  constructor() {
    this._stream = new Subject<string>();
  }

  public log(line: string) : void {
    this._stream.next(line);
  }

  public stream(): Subject<string> {
    return this._stream;
  }

  public currentDateTime(): string {
    let date = new Date();
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }
}
