import {Component} from '@angular/core';
import {ApiService} from "../api/api_service";

@Component({
  selector: 'home',
  styleUrls: ['home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  // requiring ApiService will cause it to be instatiated, and thus all calls will be cached in the background before
  // we need any of them. Since the load on the server is minimal and the performance gain significant, this is fine
  constructor(apiService: ApiService) {
  }
}
