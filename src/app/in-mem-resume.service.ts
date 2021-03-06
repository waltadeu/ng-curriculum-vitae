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
            'summary': 'Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores™ that are not merely competitive, but approach the theoretical limit of lossless compression',
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
            'summary': 'Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores™ that are not merely competitive, but approach the theoretical limit of lossless compression',
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
            'summary': 'Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores™ that are not merely competitive, but approach the theoretical limit of lossless compression',
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
            'summary': 'Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores™ that are not merely competitive, but approach the theoretical limit of lossless compression',
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
            'summary': 'Global movement of free coding clubs for young people',
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
            'summary': 'There is no spoon'
          }
        ],
        'publications': [
          {
            'name': 'Video compression for 3d media',
            'publisher': 'Hooli',
            'releaseDate': '2014-10-01',
            'url': 'http://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)',
            'summary': 'Innovative middle-out compression algorithm that changes the way we store data'
          }
        ],
        'skills': [
          {
            'name': 'Web Development',
            'level': 'Master',
            'keywords': [
              'HTML',
              'CSS',
              'JavaScript'
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
            'reference': 'It is my pleasure to recommend Richard, his performance working as a consultant for Main St. Company proved that he will be a valuable addition to any company'
          }
        ],
        'projects': [
          {
            'name': 'Miss Direction',
            'description': 'A mapping engine that misguides you',
            'highlights': [
              'Won award at AIHacks 2016',
              'Built by all women team of newbie programmers',
              'Using modern technologies such as GoogleMaps, Chrome Extension and JavaScript'
            ],
            'keywords': [
              'GoogleMaps', 'Chrome Extension', 'JavaScript'
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
          'summary': 'Em 2001 fiz um curso de HTML e CSS, esse foi o início do meu interesse pela área. Em 2004 foi ao ar meu primeiro site, que foi o site institucional da escola em que eu estudava e era coordenador da sala de informática. Em 2006 fiz dois sites, um institucional e outro da radioweb da empresa onde trabalhava como suporte infraestrutura. Em 2008 iniciei minha carreira como Front-end e trabalho especificamente com JavaScript desde 2009. Nesse tempo trabalhei com as principais tecnologias do mercado. Tenho experiência com desenvolvimento e coordenação de equipes. Estudo, pesquiso e tenho muito interesse por novas tecnologias e procuro sempre utilizar as versões mais recentes. Desenvolvo usando o Angular desde 2014.'
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
            'summary': 'Desenvolvimento e manutenção de uma plataforma B2C e B2B',
            'highlights': null
          },
          {
            'name': 'Mercado Eletrônico',
            'description': '',
            'position': 'Desenvolvedor Front-end',
            'url': 'https://www.me.com.br/',
            'startDate': '2015-06-01',
            'endDate': '2017-04-01',
            'summary': 'Desenvolvimento de uma plataforma B2B usando Angular 2 e Angular Material 2',
            'highlights': [
              'Participação em um grupo de UX que realizava testes A/B de acordo com as ideias discutidas durante as reuniões semanais',
              'Desenvolvimento da plataforma usando Angular 1.x e Material Design Lite',
              'Migração da plataforma para Angular 2 e Angular Material 2'
            ]
          },
          {
            'name': 'CTIS',
            'description': '',
            'position': 'Desenvolvedor Front-end',
            'url': 'https://www.ctis.com.br/',
            'startDate': '2014-12-01',
            'endDate': '2015-04-01',
            'summary': 'Desenvolvimento de aplicativos para Android utilizando a plataforma Ionic (Cordova, HTML, CSS e JavaScript) com utilização do framework Angular 1.x',
            'highlights': [
              'Desenvolvimento de um plugin em Java para conectar o aplicativo com uma impressora Bluetooth',
              'Desenvolvimento de um algoritmo para conversão de fotos coloridas em uma imagem P&B pontilhada para a impressão em impressora termica'
            ]
          },
          {
            'name': 'Tesla',
            'description': '',
            'position': 'Desenvolvedor Front-end',
            'url': 'http://www.tesla.com.br/',
            'startDate': '2014-05-01',
            'endDate': '2014-10-01',
            'summary': 'Coordenação da equipe de Front-end e desenvolvimento dos projetos mais complexos da empresa',
            'highlights': [
              'Desenvolvimento de um Front-end completamente novo para o e-commerce da C&C',
              'Desenvolvimento do site do Submarino Viagens'
            ]
          },
          {
            'name': 'RDI - Restaurant Application Development International LLC',
            'description': '',
            'position': 'Desenvolvedor JavaScript',
            'url': 'https://www.rdisoftware.com/',
            'startDate': '2014-01-01',
            'endDate': '2014-05-01',
            'summary': 'Prestação de serviço exclusivo para a empresa McDonald\'s no desenvolvimento e suporte de POS (point of sale) e software relacionados',
            'highlights': [
              'Desenvolvimento de modulos em JavaScript para o sistema de POS do McDonald\'s'
            ]
          },
          {
            'name': 'TaskRow e MarketUP',
            'description': '',
            'position': 'Desenvolvedor Front-end',
            'url': '',
            'startDate': '2013-06-01',
            'endDate': '2013-11-01',
            'summary': 'Freelancer para essas duas startups que compartilham um escritório',
            'highlights': [
              'TaskRow (http://goo.gl/AjAKQj): Criação da interface do sistema de gerenciamento de agências (Single Page Application e layout responsivo)',
              'MarketUP (http://goo.gl/3XpfBL): Desenvolvimento de módulos de sistema ERP (Single Page Application)'
            ]
          },
          {
            'name': 'Sapient AG2',
            'description': '',
            'position': 'Coordenador de Front-end',
            'url': 'http://www.sapientag2.com.br',
            'startDate': '2012-07-01',
            'endDate': '2013-06-01',
            'summary': 'Coordenação da equipe de Interface. Responsável pelo desenvolvimento dos projetos mais complexos da agência em HTML, CSS e JavaScript',
            'highlights': [
              'Desenvolvimento de uma SPA sem uso de frameworks para Apex Brasil',
              'Desenvolvimento de hotsites e fanpages do Facebook com layout e efeitos complexos'
            ]
          },
          {
            'name': 'Tesla',
            'description': '',
            'position': 'Desenvolvedor Front-end',
            'url': 'http://www.tesla.com.br/',
            'startDate': '2009-07-01',
            'endDate': '2012-07-01',
            'summary': 'Líder técnico e responsável pelo treinamento da equipe em JavaScript. Responsável pelo desenvolvimento dos projetos mais complexos da agência em HTML, CSS e JavaScript',
            'highlights': [
              'Responsável por trazer todo o desenvolvimento JavaScript para a equipe de Front-end',
              'Desenvolvimento de sites com layout e efeitos complexos',
              'Desenvolvimento de sites onde SEO era extremamente importante. Por ex o e-commerce da C&C'
            ]
          },
          {
            'name': 'Player Comunicação Digital',
            'description': '',
            'position': 'Desenvolvedor Front-end',
            'url': 'http://www.playercom.net/',
            'startDate': '2008-04-01',
            'endDate': '2009-07-01',
            'summary': 'Desenvolvimento (HTML e CSS) de e-mail marketing, hotsites, sites institucionais e e-commerce',
            'highlights': [
              'E-commerce da Natura',
              'Vários hotsites para a Natura',
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
              'JavaScript (ES6)',
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
            'description': 'Aplicação em Angular 4 que gera um currículo a partir de um JSON baseado no https://jsonresume.org/. Essa aplicação foi criada pelos seguintes motivos:',
            'highlights': [
              'Ter um currículo em um formato compatível com o GitHub Pages',
              'Total controle da aparência do currículo',
              'Poder testar livremente frameworks, libs e técnicas em uma aplicação'
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
      }, {
        'basics': {
          'name': 'Álister Lopes Ferreira',
          'birthdate': '1987-02-21',
          'label': 'Front-end Developer',
          'image': 'https://lh6.googleusercontent.com/-0akyozFsi68/AAAAAAAAAAI/AAAAAAABf84/QY_UrTzuwCg/photo.jpg',
          'email': 'alisterlf@gmail.com',
          'phone': '(11) 97983-7935',
          'url': 'https://alisterlf.github.io',
          'summary': 'In 2001 I did a course in HTML and CSS, this was the beginning of my interest for, what later on, would became my carrer. In 2004, as the coordinator of the computer room of the school my first institucional website was on. In 2006 I continued to develop websites, one institutional and other for the radioweb of the company I was working as infrastructure support. In 2008 my carrer as Front-end began and I work specifically with Javascript since 2009. In all those years I worked with the main technologies of the market. I have experience with web development and team coordination. I keep studing, searching and updating myself with all new technologies. I develop using Angular since 2014.'
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
            'position': 'Front-end Developer',
            'url': 'http://www.infracommerce.com.br/',
            'startDate': '2017-07-01',
            'endDate': '',
            'summary': 'Development and maintenance of a B2C and B2B platform',
            'highlights': null
          },
          {
            'name': 'Mercado Eletrônico',
            'description': '',
            'position': 'Front-end Developer',
            'url': 'https://www.me.com.br/',
            'startDate': '2015-06-01',
            'endDate': '2017-04-01',
            'summary': 'Development of a B2B platform using Angular 2 and Angular Material 2',
            'highlights': [
              'Participation in a UX group that performed A/B tests according to the ideas discussed during the weekly meetings',
              'Development of a platform using Angular 1.x and Material Design Lite',
              'Migration of the platform to Angular 2 and Material Angular 2'
            ]
          },
          {
            'name': 'CTIS',
            'description': '',
            'position': 'Front-end Developer',
            'url': 'https://www.ctis.com.br/',
            'startDate': '2014-12-01',
            'endDate': '2015-04-01',
            'summary': 'Development of Android applications using the Ionic framework (Cordova, HTML, CSS and JavaScript) with Angular framework 1.x',
            'highlights': [
              'Development of a Java plugin to connect the application to a Bluetooth printer',
              'Development of an algorithm for converting color photos into a dotted B&W image for thermal printer printing'
            ]
          },
          {
            'name': 'Tesla',
            'description': '',
            'position': 'Front-end Developer',
            'url': 'http://www.tesla.com.br/',
            'startDate': '2014-05-01',
            'endDate': '2014-10-01',
            'summary': 'Coordinator of the Front-end team and development of the company\'s most complex projects',
            'highlights': [
              'Development of a completely new Front-end for C&C e-commerce',
              'Development of Submarino Viagens website'
            ]
          },
          {
            'name': 'RDI - Restaurant Application Development International LLC',
            'description': '',
            'position': 'JavaScript Developer',
            'url': 'https://www.rdisoftware.com/',
            'startDate': '2014-01-01',
            'endDate': '2014-05-01',
            'summary': 'Service focused on develop and support of POS (point of sale) and related softwares for Mc Donald\'s',
            'highlights': [
              'Developing JavaScript modules for the McDonald\'s POS system'
            ]
          },
          {
            'name': 'TaskRow e MarketUP',
            'description': '',
            'position': 'Front-end Developer',
            'url': '',
            'startDate': '2013-06-01',
            'endDate': '2013-11-01',
            'summary': 'Freelancer for these two startups who share an office',
            'highlights': [
              'TaskRow (http://goo.gl/AjAKQj): Creating the agency management system interface (Single Page Application e layout responsivo)',
              'MarketUP (http://goo.gl/3XpfBL): Development of POS system modules (Single Page Application)'
            ]
          },
          {
            'name': 'Sapient AG2',
            'description': '',
            'position': 'Front-end Coordinator',
            'url': 'http://www.sapientag2.com.br',
            'startDate': '2012-07-01',
            'endDate': '2013-06-01',
            'summary': 'Coordination of the Interface team. Responsible for developing the agency\'s most complex projects in HTML, CSS and JavaScript',
            'highlights': [
              'Development of a SPA without using frameworks to Apex Brasil',
              'Development of hotsites and Facebook fanpages with layout and complex effects'
            ]
          },
          {
            'name': 'Tesla',
            'description': '',
            'position': 'Front-end Developer',
            'url': 'http://www.tesla.com.br/',
            'startDate': '2009-07-01',
            'endDate': '2012-07-01',
            'summary': 'Technical leader responsible for training the team in JavaScript. Responsible for developing the agency\'s most complex projects in HTML, CSS and JavaScript',
            'highlights': [
              'Responsible for bringing all Javascript development to the Front-end team',
              'Development of sites with complex layout and effects',
              'Development of websites where SEO was extremely important. For example, C&C e-commerce'
            ]
          },
          {
            'name': 'Player Comunicação Digital',
            'description': '',
            'position': 'Front-end Developer',
            'url': 'http://www.playercom.net/',
            'startDate': '2008-04-01',
            'endDate': '2009-07-01',
            'summary': 'Development (HTML and CSS) of e-mail marketing, hotsites, institutional sites and e-commerce',
            'highlights': [
              'Natura\'s e-commerce ',
              'Natura\'s several hotsites',
              'Online catalogue of Leroy Merlin'
            ]
          }
        ],
        'volunteer': null,
        'education': [
          {
            'institution': 'Universidade Nove de Julho',
            'area': 'Computer science',
            'studyType': 'Bachelor degree',
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
            'name': 'Languages',
            'level': '',
            'keywords': [
              'HTML5',
              'CSS3',
              'JavaScript (ES6)',
              'Node.js'
            ]
          },
          {
            'name': 'Frameworks and libs',
            'level': '',
            'keywords': [
              'Angular (1.x and 2+)',
              'Bootstrap (2, 3 and 4)',
              'Cordova, Ionic',
              'Angular Material, Material Design Lite',
              'Foundation',
              'jQuery',
              'Knockout',
              'Hogan.js, Handlebars and Mustache'
            ]
          },
          {
            'name': 'Work with',
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
              'C#.NET (Web Forms and MVC)',
              'Adobe Photoshop',
              'Visual Studio',
              'Visual Studio Code'
            ]
          },
          {
            'name': 'Techniques',
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
            'name': 'I am learning',
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
            'fluency': 'Native speaker'
          },
          {
            'language': 'Inglês',
            'fluency': 'Advanced'
          }
        ],
        'interests': null,
        'references': null,
        'projects': [
          {
            'name': 'Angular Curriculum Vitae',
            'description': 'Angular 4 aplication that generates a resume according to a JSON based on https://jsonresume.org/. This application was created for the following reasons:',
            'highlights': [
              'Have a resume in a format compatible with GitHub Pages',
              'Full control of resume look',
              'Being able to freely test frameworks, libs and techniques in an application'
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
