import { Component, OnInit } from '@angular/core';
import { ResumeService } from "./resume.service";
import { Resume } from "./resume";

@Component({
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resume: Resume;

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.resumeService.getResume()
      .then(resume => this.resume = resume)
      .catch(error => console.log(<any>error));
  }

}
