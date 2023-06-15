import { Injectable } from '@angular/core';
import {FilesService} from './files.service';
import {Skill} from '../model/Skill';

@Injectable({
  providedIn: 'root'
})
export class ShellService {

  constructor(private filesService: FilesService) { }

  getHelp(): string {
    let help = 'Welcome to my bash!!<br>';
    help = '&nbsp;&nbsp;This are the available Commands:<br>';
    help += '&nbsp;&nbsp;help: List the bash commands<br>';
    help += '&nbsp;&nbsp;skills: List my skills with a dominance rate from 1 to 10<br>';
    help += '&nbsp;&nbsp;jobs: List all my professional life<br>';
    help += '&nbsp;&nbsp;langs: List my languages (not the programming ones BTW)<br>';
    help += '&nbsp;&nbsp;mkdir: Create a directory, in memory of course<br>';
    help += '&nbsp;&nbsp;cd: Move into a directory, just for fun, it doesn\'t actually makes any diference.<br>';
    return help;
  }
  getSkills(): string{
    let skills = '';
    this.filesService.getSkills().forEach( skill => {
      skills += this.getDotsLine(skill.name, skill.value);
    });
    return skills;
  }

  getJobs(): string {
    let jobsHtml = '';
    jobsHtml += this.fillByToSize('Job Title', 40);
    jobsHtml += this.fillByToSize('Company', 30);
    jobsHtml += this.fillByToSize('From', 20);
    jobsHtml += this.fillByToSize('To', 20);
    jobsHtml += '<br>';
    this.filesService.getJobs().forEach( job => {
      jobsHtml += this.fillByToSize(job.title, 40);
      jobsHtml += this.fillByToSize(job.company, 30);
      jobsHtml += this.fillByToSize(job.startDate, 20);
      jobsHtml += this.fillByToSize(job.endDate, 20);
      jobsHtml += '<br>';
    });
    return jobsHtml;
  }

  private fillByToSize(text: string, size: number): string {
    let field = text;
    if (field.length < size) {
      for (let i = field.length; i < size; i++){
        field += '&nbsp;';
      }
    }
    return field;
  }
  getLanguages(): string {
    let languages = '';
    this.filesService.getLanguage().forEach(lang => {
      languages += lang.name + '<br>';
      languages += this.getDotsLine('Write', lang.write);
      languages += this.getDotsLine('Read', lang.write);
      languages += this.getDotsLine('Speak', lang.write);
    });
    return languages;
  }

  private getDotsByValue(value: number): string{
    let dots = '';
    const valueTenScale = value / 10;
    for (let i = 1; i <= 10; i++) {
      if (i <= valueTenScale) {
        dots += '*';
      }else {
        dots += '-';
      }
    }
    return dots;
  }

  private getDotsLine(title: string, value: number): string {
    let line = '&nbsp;&nbsp;' + title + '&nbsp;&nbsp;[ ';
    line += this.getDotsByValue(value);
    line += ' ] <br>';
    return line;
  }
}
