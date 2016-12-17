import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {LogManager} from "../log_manager";
import {Observable} from "rxjs";

@Component({
  selector: 'background',
  templateUrl: './background.component.html',
  styleUrls: ['background.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BackgroundComponent {
  public logs: string[] = new Array<string>();
  public blink_toggle: boolean;

  constructor(private logManager: LogManager) {

    // subscribe to log stream
    logManager.stream().subscribe(line => {
      this.logs.push(line);
    });

    // timer for cursor blink
    this.blink_toggle = true;
    Observable.timer(700, 700).subscribe(
      tick => {
        this.blink_toggle = this.blink_toggle == false;
      }
    );

    // initial log :)
    this.logs.push(`[${logManager.currentDateTime()}] log initialized`);
  }
}
