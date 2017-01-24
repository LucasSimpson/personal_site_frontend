import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api/api_service";
import {FunLink} from "../api/fun_link.model";

@Component({
  selector: 'home',
  styleUrls: ['home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  fun_links: FunLink[];

  // requiring ApiService will cause it to be instatiated, and thus all calls will be cached in the background before
  // we need any of them. Since the load on the server is minimal and the performance gain significant, this is fine
  constructor(private apiService: ApiService) {
  }

  ngOnInit () {
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
