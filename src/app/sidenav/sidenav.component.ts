import {Component, ViewEncapsulation, Input} from "@angular/core";

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent{
  @Input() showNav: boolean;
}
