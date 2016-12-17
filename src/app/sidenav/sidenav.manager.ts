import {Injectable} from "@angular/core";
import {SidenavComponent} from "./sidenav.component";

@Injectable()
export class SidenavManager {
  private sidenav: SidenavComponent;

  public registerSidenav(nav: SidenavComponent): void {
    this.sidenav = nav;
  }

  public toggle() {
    this.sidenav.toggle();
  }

  public set(state: boolean) {
    this.sidenav.set(state);
  }
}
