import {Component, ViewEncapsulation, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent{
  @Output() onNavToggle = new EventEmitter<boolean>();
  private showSideNav: boolean;

  constructor() {
    this.showSideNav = false;
  }

  // toggle state of side nav
  public toggleSideNav() {
    this.showSideNav = this.showSideNav == false;
    this.onNavToggle.emit(this.showSideNav);
  }
}
