import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {WorkExperienceService} from "./work_experience.service";
import {WorkExperience} from "./work_experience.model";

@Component({
  selector: 'work-experience',
  templateUrl: './work_experience.component.html',
  styleUrls: ['./work_experience.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WorkExperienceComponent implements OnInit {
  work_experiences: WorkExperience[];

  constructor(private workExperience: WorkExperienceService) {
  }

  ngOnInit() {
    this.workExperience.all().subscribe(
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
