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
  i18n: any;

  constructor(private route: ActivatedRoute, private titleService: Title) { }

  ngOnInit() {
    this.resume = this.route.snapshot.data['resume'];
    this.titleService.setTitle(`${this.resume.basics.name} - Curriculum Vitae`);
    this.i18n = [{
      'langCode': 'pt-br',
      'dateFormat': 'DD/MM/YYYY',
      'shortDateFormat': 'MMM/YYYY',
      'summary': 'Sobre',
      'education': {
        'header': 'Formação',
        'institution': 'Instituição',
        'area': 'Formação',
        'studyType': 'Titulação',
        'startDate': 'Início',
        'endDate': 'Término',
        'gpa': 'Média',
        'courses': 'courses'
      },
      'awards': {
        'header': 'Certificação',
        'title': 'Título',
        'date': 'Data',
        'awarder': 'Instituição',
        'summary': 'Resumo'
      },
      'skills': 'Competências e especialidades',
      'languages': 'Idiomas',
      'projects': {
        'header': 'Projetos',
        'now': 'Atual',
        'roles': 'Funções'
      },
      'publications': 'Publicações',
      'references': 'Recomendações',
      'work': 'Experiência profissional',
      'volunteer': 'Trabalho Voluntário',
      'interests': 'Interesses'
    }, {
      'langCode': 'en',
      'dateFormat': 'MM/DD/YYYY',
      'shortDateFormat': 'MMM/YYYY',
      'summary': 'About',
      'education': {
        'header': 'Education',
        'institution': 'Institution',
        'area': 'Area',
        'studyType': 'Study type',
        'startDate': 'Start date',
        'endDate': 'End date',
        'gpa': 'GPA',
        'courses': 'courses'
      },
      'awards': {
        'header': 'Certification',
        'title': 'Title',
        'date': 'Date',
        'awarder': 'Awarder',
        'summary': 'Summary'
      },
      'skills': 'Skills',
      'languages': 'languages',
      'projects': {
        'header': 'Projects',
        'now': 'Now',
        'roles': 'Roles'
      },
      'publications': 'Publications',
      'references': 'References',
      'work': 'Work',
      'volunteer': 'Volunteer',
      'interests': 'Interests'
    }][1];
  }
}
