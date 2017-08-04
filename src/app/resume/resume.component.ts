import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Resume } from './resume';

@Component({
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resume: Resume;

  constructor(private route: ActivatedRoute, private titleService: Title) { }

  ngOnInit() {
    this.resume = this.route.snapshot.data['resume'];
    this.titleService.setTitle(`${this.resume.basics.name} - Curriculum Vitae`);
  }

}
