import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Resume } from './resume/resume';

export class InMemResumeService implements InMemoryDbService {
  createDb() {
    const resumes: Resume[] = [
      {
        'basics': {
          'name': 'Richard Hendriks',
          'birthdate': '2014-06-29',
          'label': 'Programmer',
          'image': '',
          'email': 'richard.hendriks@mail.com',
          'phone': '(912) 555-4321',
          'url': 'http://richardhendricks.example.com',
          'summary': 'Richard hails from Tulsa. He has earned degrees from the University of Oklahoma and Stanford. (Go Sooners and Cardinal!) Before starting Pied Piper, he worked for Hooli as a part time software developer. While his work focuses on applied information theory, mostly optimizing lossless compression schema of both the length-limited and adaptive variants, his non-work interests range widely, everything from quantum computing to chaos theory. He could tell you about it, but THAT would NOT be a “length-limited” conversation!',
          'location': {
            'address': '2712 Broadway St',
            'postalCode': 'CA 94115',
            'city': 'San Francisco',
            'countryCode': 'US',
            'region': 'California'
          },
          'profiles': [
            {
              'network': 'Twitter',
              'username': 'neutralthoughts',
              'url': ''
            },
            {
              'network': 'SoundCloud',
              'username': 'dandymusicnl',
              'url': 'https://soundcloud.example.com/dandymusicnl'
            }
          ]
        },
        'work': [
          {
            'name': 'Pied Piper',
            'description': 'Awesome compression company',
            'position': 'CEO/President',
            'url': 'http://piedpiper.example.com',
            'startDate': '2013-12-01',
            'endDate': '2014-12-01',
            'summary': 'Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores™ that are not merely competitive, but approach the theoretical limit of lossless compression.',
            'highlights': [
              'Build an algorithm for artist to detect if their music was violating copy right infringement laws',
              'Successfully won Techcrunch Disrupt',
              'Optimized an algorithm that holds the current world record for Weisman Scores'
            ]
          },
          {
            'name': 'Pied Piper',
            'description': 'Awesome compression company',
            'position': 'CEO/President',
            'url': 'http://piedpiper.example.com',
            'startDate': '2013-12-01',
            'endDate': '2014-12-01',
            'summary': 'Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores™ that are not merely competitive, but approach the theoretical limit of lossless compression.',
            'highlights': [
              'Build an algorithm for artist to detect if their music was violating copy right infringement laws',
              'Successfully won Techcrunch Disrupt',
              'Optimized an algorithm that holds the current world record for Weisman Scores'
            ]
          },
          {
            'name': 'Pied Piper',
            'description': 'Awesome compression company',
            'position': 'CEO/President',
            'url': 'http://piedpiper.example.com',
            'startDate': '2013-12-01',
            'endDate': '2014-12-01',
            'summary': 'Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores™ that are not merely competitive, but approach the theoretical limit of lossless compression.',
            'highlights': [
              'Build an algorithm for artist to detect if their music was violating copy right infringement laws',
              'Successfully won Techcrunch Disrupt',
              'Optimized an algorithm that holds the current world record for Weisman Scores'
            ]
          },
          {
            'name': 'Pied Piper',
            'description': 'Awesome compression company',
            'position': 'CEO/President',
            'url': 'http://piedpiper.example.com',
            'startDate': '2013-12-01',
            'endDate': '2014-12-01',
            'summary': 'Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores™ that are not merely competitive, but approach the theoretical limit of lossless compression.',
            'highlights': [
              'Build an algorithm for artist to detect if their music was violating copy right infringement laws',
              'Successfully won Techcrunch Disrupt',
              'Optimized an algorithm that holds the current world record for Weisman Scores'
            ]
          }
        ],
        'volunteer': [
          {
            'organization': 'CoderDojo',
            'position': 'Teacher',
            'url': 'http://coderdojo.example.com/',
            'startDate': '2012-01-01',
            'endDate': '2013-01-01',
            'summary': 'Global movement of free coding clubs for young people.',
            'highlights': [
              'Awarded "Teacher of the Month"'
            ]
          }
        ],
        'education': [
          {
            'institution': 'University of Oklahoma',
            'area': 'Information Technology',
            'studyType': 'Bachelor',
            'startDate': '2011-06-01',
            'endDate': '2014-01-01',
            'gpa': '4.0',
            'courses': [
              'DB1101 - Basic SQL',
              'CS2011 - Java Introduction'
            ]
          }
        ],
        'awards': [
          {
            'title': 'Digital Compression Pioneer Award',
            'date': '2014-11-01',
            'awarder': 'Techcrunch',
            'summary': 'There is no spoon.'
          }
        ],
        'publications': [
          {
            'name': 'Video compression for 3d media',
            'publisher': 'Hooli',
            'releaseDate': '2014-10-01',
            'url': 'http://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)',
            'summary': 'Innovative middle-out compression algorithm that changes the way we store data.'
          }
        ],
        'skills': [
          {
            'name': 'Web Development',
            'level': 'Master',
            'keywords': [
              'HTML',
              'CSS',
              'Javascript'
            ]
          },
          {
            'name': 'Compression',
            'level': 'Master',
            'keywords': [
              'Mpeg',
              'MP4',
              'GIF'
            ]
          }
        ],
        'languages': [
          {
            'language': 'English',
            'fluency': 'Native speaker'
          }
        ],
        'interests': [
          {
            'name': 'Wildlife',
            'keywords': [
              'Ferrets',
              'Unicorns'
            ]
          }
        ],
        'references': [
          {
            'name': 'Erlich Bachman',
            'reference': 'It is my pleasure to recommend Richard, his performance working as a consultant for Main St. Company proved that he will be a valuable addition to any company.'
          }
        ],
        'projects': [
          {
            'name': 'Miss Direction',
            'description': 'A mapping engine that misguides you',
            'highlights': [
              'Won award at AIHacks 2016',
              'Built by all women team of newbie programmers',
              'Using modern technologies such as GoogleMaps, Chrome Extension and Javascript'
            ],
            'keywords': [
              'GoogleMaps', 'Chrome Extension', 'Javascript'
            ],
            'startDate': '2016-08-24',
            'endDate': '2016-08-24',
            'url': 'missdirection.example.com',
            'roles': [
              'Team lead', 'Designer'
            ],
            'entity': 'Smoogle',
            'type': 'application'
          }
        ],
        'meta': {
          'canonical': 'https://raw.githubusercontent.com/jsonresume/resume-schema/master/resume.json',
          'version': 'v1.0.0',
          'lastModified': '2017-12-24T15:53:00'
        }
      }, {
        'basics': {
          'name': 'Álister Lopes Ferreira',
          'birthdate': '1987-02-21',
          'label': 'Desenvolvedor Front-end',
          'image': 'https://lh6.googleusercontent.com/-0akyozFsi68/AAAAAAAAAAI/AAAAAAABf84/QY_UrTzuwCg/photo.jpg',
          'email': 'alisterlf@gmail.com',
          'phone': '(11) 97983-7935',
          'url': 'https://alisterlf.github.io',
          'summary': 'Em 2001 fiz um curso de HTML e CSS, esse foi o início do meu interesse pela área. Em 2004 foi ao ar meu primeiro site, que foi o site institucional da escola em que eu estudava e era coordenador da sala de informática. Em 2006 fiz dois sites, um institucional e outro da radioweb da empresa onde trabalhava como suporte infraestrutura. Em 2008 iniciei minha carreira como front-end e trabalho especificamente com Javascript desde 2009. Nesse tempo trabalhei com as principais tecnologias do mercado. Tenho experiência com desenvolvimento e cordenação de equipes. Estudo, pesquiso e tenho muito interesse por novas tecnologias e procuro sempre utilizar as versões mais recentes. Desenvolvo usando o Angular desde 2014.'
          ,
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
              'url': 'https://www.linkedin.com/in/alisterlf'
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
            'summary': 'Desenvolvimento de aplicativos para Android utilizando a plataforma Ionic (Cordova, HTML, CSS e Javascript). Com utilização do framework Angular 1.x.',
            'highlights': null
          },
          {
            'name': 'Tesla',
            'description': '',
            'position': 'Desenvolvedor Front-end',
            'url': 'http://www.tesla.com.br/',
            'startDate': '2014-05-01',
            'endDate': '2014-10-01',
            'summary': 'Coordenação da equipe de front-end e desenvolvimentos dos projetos mais complexos da empresa.',
            'highlights': [
              'Troca de todo o front-end do e-commerce.',
              'Desenvolvimento do site do Submarino Viagens'
            ]
          },
          {
            'name': 'RDI - Restaurant Application Development International LLC',
            'description': '',
            'position': 'Desenvolvedor Javascript',
            'url': 'https://www.rdisoftware.com/',
            'startDate': '2014-01-01',
            'endDate': '2014-05-01',
            'summary': 'Prestação de serviço exclusivo para a empresa McDonald\'s no desenvolvimento e suporte de POS (point-of - sale) e software relacionados.',
            'highlights': [
              'Desenvolvimentos de modulos em Javascript para o sitema de POS do McDonald\'s'
            ]
          },
          {
            'name': 'TaskRow e MarketUP',
            'description': '',
            'position': 'Desenvolvedor Front-end',
            'url': '',
            'startDate': '2013-06-01',
            'endDate': '2013-11-01',
            'summary': 'Trabalhei como freelancer para essas duas startups que compatilham um escritorio.',
            'highlights': [
              'TaskRow (http://goo.gl/AjAKQj). Criação da interface do sistema de gerenciamento de agências (Single Page Application e layout responsivo)',
              'MarketUP (http://goo.gl/3XpfBL): Desenvolvimento de módulos de sistema ERP (Single Page Application).'
            ]
          },
          {
            'name': 'Sapient AG2',
            'description': '',
            'position': 'Coordenador de Front-end',
            'url': 'http://www.sapientag2.com.br',
            'startDate': '2012-07-01',
            'endDate': '2013-06-01',
            'summary': 'Coordenação da equipe de Interface. Responsável pelo desenvolvimento dos projetos mais complexos da agências em HTML, CSS e Javascript.',
            'highlights': [
              'Desenvolvi um SPA sem uso de frameworks para Apex Brasil',
              'Desenvolvi hotsites e fanpages do Facebook com layout e efeitos complexos'
            ]
          },
          {
            'name': 'Tesla',
            'description': '',
            'position': 'Desenvolvedor Front-end',
            'url': 'http://www.tesla.com.br/',
            'startDate': '2009-07-01',
            'endDate': '2012-07-01',
            'summary': 'Líder técnico da equipe, responsável pelo treinamento da equipe em javascript. Responsável pelo desenvolvimento dos projetos mais complexos da agências em HTML, CSS e Javascript.',
            'highlights': [
              'Fui responsável por trazer todo o desenvolvimento javascript para a equipe de front-end',
              'Desenvolvi sites com layout e efeitos complexos',
              'Desenvolvi sites onde SEO era extremamente importante por ex o e-commerce da C&C'
            ]
          },
          {
            'name': 'Player Comunicação Digital',
            'description': '',
            'position': 'Desenvolvedor Front-end',
            'url': 'http://www.playercom.net/',
            'startDate': '2008-04-01',
            'endDate': '2009-07-01',
            'summary': 'Desenvolvimento (HTML e CSS) de e-mail marketing, hotsites, sites institucionais, e e-commerce.',
            'highlights': [
              'E-commerce da Natura',
              'Varios hotsites para a Natura',
              'Catálogo online da Leroy Merlin'
            ]
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
              'Javascript (ES6)',
              'Node.js'
            ]
          },
          {
            'name': 'Frameworks e bibliotecas',
            'level': '',
            'keywords': [
              'Angular (1.x e 2+)',
              'Bootstrap (2, 3 e 4)',
              'Cordova, Ionic',
              'Angular Material, Material Design Lite',
              'Foundation',
              'jQuery',
              'Knockout',
              'Hogan.js, Handlebars e Mustache'
            ]
          },
          {
            'name': 'Trabalho com',
            'level': '',
            'keywords': [
              'TypeScript',
              'SASS, LESS',
              'REST API',
              'GIT, TFS, SVN',
              'Webpack, Grunt, Gulp',
              'NPM, Bower',
              'ESLint, TSLint',
              'RxJS',
              'Angular CLI',
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
        'projects': [
          {
            'name': 'Angular Curriculum Vitae',
            'description': 'Aplicação em Angular 4 que gera um currículo apartir de um JSON (json baseado no https://jsonresume.org/). Essa aplicação foi criada pelos seguintes motivos:',
            'highlights': [
              'Ter um currículo que eu possa hospedar no GitHub Pages.',
              'Ter total controle da aparencia do currículo.',
              'Tem uma aplicação onde possa testar frameworks, libs e técnicas.'
            ],
            'keywords': null,
            'startDate': '2017-07-20',
            'endDate': null,
            'url': 'https://github.com/alisterlf/ng-curriculum-vitae',
            'roles': null,
            'entity': null,
            'type': 'Angular Application'
          }
        ],
        'meta': {
          'canonical': 'https://raw.githubusercontent.com/jsonresume/resume-schema/master/resume.json',
          'version': 'v1.0.0',
          'lastModified': '2017-08-06T19:34:00'
        }
      }
    ];
    const resume = resumes[1];
    return { resume };
  }
}
