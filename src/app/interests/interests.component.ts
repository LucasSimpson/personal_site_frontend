import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {ApiService} from "../api/api_service";
import {FunLink} from "../api/fun_link.model";

@Component({
  selector: 'interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InterestsComponent implements OnInit {
  fun_links: FunLink[];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.fun_links().subscribe(
      fun_links => {
        this.fun_links = fun_links;
      },
      err => {
        console.log('ERROR: ' + err);
      }
    );
  }

}
