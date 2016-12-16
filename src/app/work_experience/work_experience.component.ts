import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {ApiService} from "../api/api_service";
import {WorkExperience} from "../api/work_experience.model";

@Component({
  selector: 'work-experience',
  templateUrl: './work_experience.component.html',
  styleUrls: ['./work_experience.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorkExperienceComponent implements OnInit {
  work_experiences: WorkExperience[];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.work_experiences().subscribe(
      work_experiences => {

        work_experiences.sort(function (a: WorkExperience, b: WorkExperience) : number{
          return -(a.chrono_order - b.chrono_order);
        });

        this.work_experiences = work_experiences;
      },
      err => {
        console.log('ERROR: ' + err);
      }
    );
  }

}
