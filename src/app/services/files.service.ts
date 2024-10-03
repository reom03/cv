import {EventEmitter, Injectable, Output} from '@angular/core';
import {Skill} from '../model/Skill';
import {Language} from '../model/language';
import {Job} from '../model/Job';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  @Output() emitOpenTab = new EventEmitter<string>();
  constructor() { }
  openTab(tab: string): void {
    this.emitOpenTab.emit(tab);
  }

  getSkills(): Skill[] {
    return [
      {name: 'Java', value: 100},
      {name: 'Grails', value: 100},
      {name: 'Groovy', value: 100},
      {name: 'Angular', value: 80},
      {name: 'Agile and Scrum', value: 80},
      {name: 'AWS', value: 80},
      {name: 'Bootstrap', value: 70},
      {name: 'RestFull API', value: 70},
      {name: 'Agile and Scrum', value: 80},
      {name: 'PostgreSQL', value: 60},
      {name: 'Kotlin', value: 60},
      {name: 'Oracle', value: 60},
      {name: 'Android App Development', value: 50}
      ];
  }
  getLanguage(): Language[] {
    return [
      {name: 'Spanish', read: 100, write: 100, speak: 100},
      {name: 'English', read: 90, write: 80, speak: 70}
    ];
  }
  getJobs(): Job[] {
    return [
      {
        title: 'Technical Lead',
        description: 'TL in a Scrum Cell in charge of the development of a new module \n' +
        'which will add integration with the Mach payment ecosystem, to \n' +
        'achieve features such as Pays between phone contacts, P2M\n' +
        'payments through QR, currently with 80k active users and over 10.000 transactions a month',
        startDate: '11/2021', endDate: 'Present', logo: 'bci.png',
        experience: [ 'Team Leading', 'Kotlin', 'Java', 'Microservices', 'Jenkins', 'Jira', 'Bitbucket'],
        company: 'Bci',
        url: 'https://www.bci.cl',
        info: {
          projects: [
            {name: 'App Bci', url: 'https://play.google.com/store/apps/details?id=cl.bci.app.personas&hl=es_CL&gl=US&pli=1'}
          ]
        }
      },
      {
        title: 'Co-founder',
        description: 'Our company is in charge of the design and the development of Web applications requested by the\n' +
          'clients, currently developing an Online Dispute Resolutions System for the Chambers of Commerce\n' +
          'of Santiago.',
        startDate: '01/2010', endDate: '10/2021', logo: 'def4u.png',
        experience: ['Angular 8+', 'Grails', 'Groovy', 'ApiRest', 'Jira', 'Bitbucket'],
        company: 'Def Systems',
        url: 'https://www.de4u.com',
        info: {projects: [
            {name: 'ODR Cam', url: 'https://testing.odr-cam.com/'},
            {name: 'ODR Cam B2C', url: 'https://user-b2c.odr-cam.com/'}
          ]
        }
      },
      {
        title: 'Senior Developer',
        description: 'Design and development of a platform for planning, management and monitoring of searches in penitentiary facilities for Gendarmeria de Chile, using Grails 2.2.1 and ExtJS 3.4, with DB Oracle',
        startDate: '08/2017', endDate: '11/2017 (Temporary Contract)', logo: 'kibernumTrans.png',
        experience: ['ExtJs 3.4', 'Grails', 'Groovy', 'ApiRest'],
        company: 'Kibernum',
        boss: 'Cristian Rosales',
        url: 'https://www.kibernum.com/',
        info: {projects: [
            {name: 'Searches', url: 'https://www.gendarmeria.gob.cl/'}
          ]
        }
      },
      {
        title: 'Senior Developer',
        description: 'Maintenance of Java applications for clients in banking area such as BBVA and Banco Falabela. In BBVA implementation of SoftToken in online banking for people (BBVA Pass). In Banco Falabella, modification of the Commercial Platform App, which is used by executives.',
        startDate: '01/2017', endDate: '07/2017 (Temporary Contract)', logo: 'iconexaTrans.png',
        experience: ['J2EE', 'GWT', 'Oracle', 'Shell-Script'],
        company: 'Iconexa',
        boss: 'Marcos Aguilar',
        url: 'https://www.facebook.com/iconexa',
        info: {}
      },
      {
        title: 'Technical Leader > IT Manager',
        description: '<strong>IT Manager</strong><br>  Manage a team of 5 people, with developers, testers and aws architects, interaction with the business area to define requirements <br>' +
          '<strong>Technical Leader</strong><br>Design and development of B2B application for integration between Retailers and Brands, developed in Grails, with DB Postgres and deployed in AWS.',
        startDate: '10/2015', endDate: '12/2019 (Freelance between: 01/2017 - 12/2017)', logo: 'fromozz.png',
        company: 'Fromozz Group',
        experience: ['Groovy / Grails 2.3.11', 'Git', 'jenkins', 'Asana', 'Angular 8+', 'Jira', 'CI/CD Bitbucket Pipelines', 'PostgreSQL'],
        url: 'http://www.fromozz.com/',
        boss: 'Carlos Nieto',
        info: {projects: [
            {name: 'EcuadorB2B', url: 'https://www.ecuadorb2b.com/'},
            {name: 'ChileB2B', url: 'https://www.chileb2b.cl/'},
            {name: 'Fromozz', url: 'https://fromozz.com/'}
          ]
        }
      },
      {
        title: 'Consultant',
        description: 'Maintenance and development of Web Applications in Hibu. using technologies such as Spring, Mybatis, Hiberante, Tomcat, DB: MySQL, Oracle',
        startDate: '10/2014', endDate: '09/2015', logo: 'vass.png',
        experience: ['Spring', 'Mybatis', 'Hiberante', 'Tomcat', 'MySQL','Oracle'],
        company: 'Vass Latam',
        url: 'http://www.vasslatam.cl/',
        boss: 'Alberto Ibañez',
        info: {}
      },
      { title: 'IT Specialist',
        description: 'Analysis, Development and maintenance of applications related to Online Banking.\n' +
          'Leader of the Venecredit Office Banking Project, which is the\n' +
          'Online banking for companies.',
          experience: ['Java 6', 'Struts 2', 'Spring', 'Jax WS', 'DB Informix', 'DB Oracle 11G', 'PL / SQL', 'Hibernate 3', 'JPA', 'Jquery', 'Bootstrap', ' JavaScript', ' Project management'],
        startDate: '08/2011', endDate: '09/2014', logo: 'bvc.png',
        company: 'Banco Venezolano de Credito',
        boss: 'Saul Ordoñez',
        url: 'http://www.venezolano.com/',
        info: {projects: [{name: 'VOB', url: 'https://vob.venezolano.com/'}]}
      },
      {
        title: 'Java Developer Jr II',
        description: 'Development and maintenance of the SOMA Applications, version 1.8 and version 2.0, used for the maintenance of Aircraft, Flight Operation, etc.\n' +
          'Experience in:<br>' +
          'J2EE, JSP, JSTL<br>' +
          'Spring, Hibernate<br>' +
          'MySQL<br>' +
          'Jquery, Blueprint<br>' +
          'JasperReport, Open Report<br>' +
          'Tomcat, Eclipse IDE, SVN',
        experience: [
          'J2EE', 'JSP', 'JSTL' ,
          'Spring', 'Hibernate' ,
          'MySQL' ,
          'Jquery, Blueprint' ,
          'JasperReport, Open Report' ,
          'Tomcat', 'Eclipse IDE', 'SVN'
        ],
        startDate: '07/2010', endDate: '07/2011', logo: 'teravision.png',
        company: 'Teravision Technologies',
        url: 'https://www.teravisiontech.com',
        boss: 'Jazmin Hernandez',
        info: {projects: [{name: 'SOMA', url: 'https://www.teravisiontech.com/portfolio/soma/'}]}
      },
      {
        title: 'Java Developer',
        description: 'Development and maintenance of WEB applications for Banco Venezolano de Credito.',
        experience: [
          'J2EE', 'JSP', 'JSTL', 'STRUTS', 'ORACLE PL-SQL', 'Oracle JDBC', 'IText', 'Ajax', 'Axis Web Services', 'Jboss, Aplication server',
          'Eclipse IDE', 'JDeveloper', 'CVS'
        ],
        boss: 'Sandra Mendoza',
        startDate: '01/2010', endDate: '07/2011', logo: 'y&v.png',
        company: 'Y&V Consulting',
        info: {}
      },
      {
        title: 'Java Developer',
        description: 'Analysis, Design and Programming of the Information Systems required by the company in the Javatm Programming language using NetBeans IDE 5.5.1 Tool, with MySQL database',
        experience: ['J2EE', 'JSP', 'JSTL', 'Struts Framework'],
        startDate: '06/2007', endDate: '01/2010', logo: 'hidroven.png',
        company: 'Hidroven CA',
        info: {}
      },
      {
        title: 'Java Programmer',
        description: 'Develop an administrative software for the management of buildings, built in Java and mysql database.',
        startDate: '03/2006', endDate: '01/2007', logo: 'danoral.png',
        company: 'Administradora Danoral',
        url: 'https://danoral.com/',
        info: {}
      }
    ];
  }
}
