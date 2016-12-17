import {Component, ViewEncapsulation, EventEmitter, Output} from "@angular/core";
import {SidenavManager} from "../sidenav/sidenav.manager";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent{
  private sidenavManager: SidenavManager;

  constructor(sidenavManager: SidenavManager) {
    this.sidenavManager = sidenavManager;
  }

  // toggle state of side nav
  public toggleSideNav() {
    this.sidenavManager.toggle();
  }
}
