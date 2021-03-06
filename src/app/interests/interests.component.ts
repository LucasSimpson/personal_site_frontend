import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {ApiService} from "../api/api_service";
import {FunLink} from "../api/fun_link.model";
import {Interest} from "../api/interests.model";

@Component({
  selector: 'interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InterestsComponent implements OnInit {
  fun_links: FunLink[];
  interests: Interest[];

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

    this.apiService.interests().subscribe(
      interests => {
        this.interests = interests;
      },
      err => {
        console.log('ERROR: ' + err);
      }
    );
  }
}
