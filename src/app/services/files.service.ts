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
      {name: 'Angular 8+', value: 80},
      {name: 'Bootstrap', value: 70},
      {name: 'Management', value: 60}
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
        title: 'Co-founder',
        description: 'Our company is in charge of the design and the development of Web applications requested by the\n' +
          'clients, currently developing an Online Dispute Resolutions System for the Chambers of Commerce\n' +
          'of Santiago.',
        startDate: '01/2010', endDate: '07/2011', logo: 'def4u.png',
        experience: ['Angular 8+', 'Grails', 'Groovy', 'ApiRest', 'Jira', 'Bitbucket'],
        company: 'Def Systems',
        info: {projects: [
            {name: 'ODR Cam', url: 'https://testing.odr-cam.com/'},
            {name: 'ODR Cam B2C', url: 'https://user-b2c.odr-cam.com/'}
          ]
        }
      },
      {
        title: 'Technical Leader > IT Manager',
        description: '<strong>IT Manager</strong><br>  Manage a team of 5 people, with developers, testers and aws architects, interaction with the business area to define requirements <br>' +
          '<strong>Technical Leader</strong><br>Design and development of B2B application for integration between Retailers and Brands, developed in Grails, with DB Postgres and deployed in AWS.',
        startDate: '10/2015', endDate: '12/2019', logo: 'fromozz.png',
        company: 'Fromozz Group',
        experience: ['Groovy / Grails 2.3.11', 'Git', 'jenkins', 'Asana'],
        url: 'http://www.fromozz.com/',
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
        experience: ['Spring', 'Mybatis', 'Hiberante', 'Tomcat', 'MySQL',' Oracle'],
        company: 'Vass Latam',
        url: 'http://www.vasslatam.cl/',
        info: {}
      },
      { title: 'IT Specialist',
        description: 'Analysis, Development and maintenance of applications related to Online Banking.\n' +
          'Leader of the Venecredit Office Banking Project, which is the\n' +
          'Online banking for companies.',
          experience: ['Java 6', 'Struts 2', 'Spring', 'Jax WS', 'DB Informix', 'DB Oracle 11G', 'PL / SQL Hibernate 3', 'JPA', 'Jquery', 'Bootstrap', ' JavaScript', ' Project management'],
        startDate: '08/2011', endDate: '09/2014', logo: 'bvc.png',
        company: 'Banco Venezolano de Credito',
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
        info: {projects: [{name: 'SOMA', url: 'https://www.teravisiontech.com/portfolio/soma/'}]}
      },
      {
        title: 'Java Developer',
        description: 'Development and maintenance of WEB applications for Banco Venezolano de Credito.',
        experience: [
          'J2EE', 'JSP', 'JSTL', 'STRUTS', 'ORACLE PL-SQL', 'Oracle JDBC', 'IText', 'Ajax', 'Axis Web Services', 'Jboss, Aplication server',
          'Eclipse IDE', 'JDeveloper', 'CVS'
        ],
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
        info: {}
      }
    ];
  }
}
