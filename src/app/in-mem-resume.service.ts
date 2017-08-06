import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Resume } from './resume/resume';

export class InMemResumeService implements InMemoryDbService {
  createDb() {
    const resume: Resume = {
      'basics': {
        'name': 'Álister Lopes Ferreira',
        'birthdate': '1987-02-21',
        'label': 'Desenvolvedor Front-end',
        'image': 'https://lh6.googleusercontent.com/-0akyozFsi68/AAAAAAAAAAI/AAAAAAABf84/QY_UrTzuwCg/photo.jpg',
        'email': 'richard.hendriks@mail.com',
        'phone': '(11) 97983-7935',
        'url': 'https://alisterlf.github.io',
        'summary': 'Trabalho com front-end faz 10 anos e especificamente com javascript há 8 anos. Nesse tempo já trabalhei com as principais tecnologias do mercado, nos últimos 3 anos venho desenvolvendo usando o Angular mas antes disso e cheguei a desenvolver uma SPA na mão.',
        'location': {
          'address': '',
          'postalCode': '',
          'city': 'São Paulo',
          'countryCode': 'BR',
          'region': 'SP'
        },
        'profiles': [
          {
            'network': 'LinkedIn',
            'username': 'alisterlf',
            'url': ' http://lnkd.in/3k8m6C'
          },
          {
            'network': 'GitHub',
            'username': 'alisterlf',
            'url': 'https://github.com/alisterlf/'
          }
        ]
      },
      'work': [
        {
          'name': 'Infracommerce',
          'description': '',
          'position': 'Desenvolvedor Front-end',
          'url': 'http://www.infracommerce.com.br/',
          'startDate': '2017-07-01',
          'endDate': '',
          'summary': 'Desenvolvimento e manutenção de uma plataforma B2C e B2B.',
          'highlights': null
        },
        {
          'name': 'Mercado Eletrônico',
          'description': '',
          'position': 'Desenvolvedor Front-end',
          'url': 'https://www.me.com.br/',
          'startDate': '2015-06-01',
          'endDate': '2017-04-01',
          'summary': 'Desenvolvimento de uma plataforma B2B usando Angular 2 e Angular Material 2.',
          'highlights': null
        },
        {
          'name': 'CTIS',
          'description': '',
          'position': 'Desenvolvedor Front-end',
          'url': 'https://www.ctis.com.br/',
          'startDate': '2014-12-01',
          'endDate': '2015-04-01',
          'summary': 'Desenvolvimento de aplicativos para Android utilizando a plataforma Cordova (HTML, CSS e Javascript). Com utilização do framework Angular 1.x.',
          'highlights': null
        },
        {
          'name': 'Tesla',
          'description': '',
          'position': 'Desenvolvedor Front-end',
          'url': 'http://www.tesla.com.br/',
          'startDate': '2014-05-01',
          'endDate': '2014-10-01',
          'summary': 'Coordenação da equipe de front-end e desenvolvimentos dos projetos mais complexos da empresa, dentre eles o e-commerce da C&C.',
          'highlights': null
        },
        {
          'name': 'RDI - Restaurant Application Development International LLC',
          'description': '',
          'position': 'Desenvolvedor Javascript',
          'url': 'https://www.rdisoftware.com/',
          'startDate': '2014-01-01',
          'endDate': '2014-05-01',
          'summary': 'Prestação de serviço exclusivo para a empresa McDonald\'s no desenvolvimento e suporte de POS (point-of - sale) e software relacionados.',
          'highlights': null
        },
        {
          'name': 'TaskRow e MarketUP',
          'description': '',
          'position': 'Desenvolvedor Front-end',
          'url': '',
          'startDate': '2013-06-01',
          'endDate': '2013-11-01',
          'summary': 'Startups parceiras. TaskRow (http://goo.gl/AjAKQj): Criação da interface do sistema de gerenciamento de agências (Single Page Application e layout responsivo). MarketUP (http://goo.gl/3XpfBL): Desenvolvimento de módulos de sistema ERP (Single Page Application).',
          'highlights': null
        },
        {
          'name': 'Sapient AG2',
          'description': '',
          'position': 'Coordenador de Front-end',
          'url': 'http://www.sapientag2.com.br',
          'startDate': '2012-07-01',
          'endDate': '2013-06-01',
          'summary': 'Coordenação da equipe de Interface, responsável pelo treinamento e controle de qualidade do código. Resposável pelo desenvolvimento dos projetos mais complexos da agência.',
          'highlights': null
        },
        {
          'name': 'Tesla',
          'description': '',
          'position': 'Desenvolvedor Front-end',
          'url': 'http://www.tesla.com.br/',
          'startDate': '2009-07-01',
          'endDate': '2012-07-01',
          'summary': 'Líder técnico da equipe, responsável pelo treinamento e controle de qualidade do código. Desenvolvimento de novos projetos visando a integração das equipes front-end e back-end utilizando .NET para a diminuição de erros e retrabalhos.',
          'highlights': null
        },
        {
          'name': 'Player Comunicação Digital',
          'description': '',
          'position': 'Desenvolvedor Front-end',
          'url': 'http://www.playercom.net/',
          'startDate': '2008-04-01',
          'endDate': '2009-07-01',
          'summary': 'Responsável pelo desenvolvimento de email marketing, hotsites, sites institucionais, e e-commerces (Natura e Leroy Merlin).',
          'highlights': null
        }
      ],
      'volunteer': null,
      'education': [
        {
          'institution': 'Universidade Nove de Julho',
          'area': 'Ciência da Computação',
          'studyType': 'Bacharelado',
          'startDate': '2007-07-01',
          'endDate': '',
          'gpa': '',
          'courses': null
        }
      ],
      'awards': [
        {
          'title': 'Microsoft Specialist: Programming in HTML5 with JavaScript and CSS3',
          'date': '2013-01-31',
          'awarder': 'Microsoft',
          'summary': ''
        }
      ],
      'publications': null,
      'skills': [
        {
          'name': 'Linguagens',
          'level': '',
          'keywords': [
            'HTML5',
            'CSS3',
            'Javascript(ES6)',
            'Node.js'
          ]
        },
        {
          'name': 'Frameworks e bibliotecas',
          'level': '',
          'keywords': [
            'Angular (1.x e 2+)',
            'Bootstrap (2, 3 e 4)',
            'jQuery',
            'Knockout',
            'Templating Engines (Mustache e Handlebars)'
          ]
        },
        {
          'name': 'Trabalho com',
          'level': '',
          'keywords': [
            'TypeScript',
            'SASS',
            'LESS',
            'REST',
            'GIT',
            'TFS ',
            'SVN',
            'Webpack',
            'Bower',
            'Gulp',
            'Grunt',
            'C#.NET (Web Forms e MVC)',
            'Adobe Photoshop',
            'Visual Studio',
            'Visual Studio Code'
          ]
        },
        {
          'name': 'Técnicas',
          'level': '',
          'keywords': [
            'Single Page Applications',
            'Responsive & Fluid Layout (FlexBox)',
            'Parallax',
            'Cross-browser Compatibility',
            'Web Standards',
            'Acessibilidade',
            'SEO',
            'WAI-ARIA',
            'Microformats'
          ]
        },
        {
          'name': 'Estou aprendendo',
          'level': '',
          'keywords': [
            'React',
            'Webpack',
            'CSS Grid layout',
            'Jasmine',
            'Karma',
            'Protractor'
          ]
        }
      ],
      'languages': [
        {
          'language': 'Português',
          'fluency': 'Nativo'
        },
        {
          'language': 'Inglês',
          'fluency': 'Avançado'
        }
      ],
      'interests': null,
      'references': null,
      'projects': null,
      'meta': {
        'canonical': 'https://raw.githubusercontent.com/jsonresume/resume-schema/master/resume.json',
        'version': 'v1.0.0',
        'lastModified': '2017-08-06T19:34:00'
      }
    };
    return { resume };
  }
}
