import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.css', './global.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public showNav: boolean = false;

  public onNavToggle(navState: boolean) {
    this.showNav = navState;
  }
}
