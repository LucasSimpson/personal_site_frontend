import {Component, ViewEncapsulation, Input} from "@angular/core";
import {SidenavManager} from "./sidenav.manager";

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent{
  private showNav: boolean = false;

  constructor(manager: SidenavManager) {
    manager.registerSidenav(this);
  }

  public toggle(): void {
    this.showNav = this.showNav == false;
  }

  public set(state:boolean): void {
    this.showNav = state;
  }

}
