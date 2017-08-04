import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Resume } from './resume';

@Component({
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resume: Resume;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.resume = this.route.snapshot.data['resume'];
  }

}
