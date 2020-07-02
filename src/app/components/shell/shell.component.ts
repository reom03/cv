import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ShellService} from '../../services/shell.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  history: string[] = [];
  folders: string[] = [];
  historyIndex = 0;
  input = '';
  folder = '~';
  prompt = this.getCmdLine();
  @ViewChild('inputSh', {static: false}) inputSh: ElementRef;

  constructor(private shellService: ShellService,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  private getCmdLine(): string {
    return '<span style="color: #7fff00 !important;"> visitor@raulortiz-cv:</span><span style="color: #60a3a5">' + this.folder + '</span>$&nbsp;</span>';
  }
  private updateField(): void {
    this.input = this.history[this.historyIndex];
  }
  key(keyEvent: any): void {
    if (keyEvent.key === 'Enter'){
      this.enter();
    }else if (keyEvent.key === 'ArrowUp'){
      this.moveInHistory('UP');
    } else if (keyEvent.key === 'ArrowDown'){
      this.moveInHistory('DOWN');
    }
  }
  private enter(): void{
    const command = this.input.trim();
    if (command) {
      this.history.push(command);
      this.historyIndex = this.history.length;
      this.addLine(command, false);
      if (command === 'help') {
        this.addLine(this.shellService.getHelp(), true);
      }else if ( command === 'skills'){
        this.addLine(this.shellService.getSkills(), true);
      }else if ( command === 'jobs') {
        this.addLine(this.shellService.getJobs(), true);
      }else if ( command === 'pwd') {
        let route = '/you/are/here/';
        if (this.folder !== '~'){
          route += this.folder + '/';
        }
        this.addLine(route, true);
      }else if ( command === 'langs') {
        this.addLine(this.shellService.getLanguages(), true);
      }else if ( command === 'ls'){
        let html = '';
        if (this.folder === '~'){
          this.folders.forEach(folder => {
            html += '&nbsp;' + folder;
          });
        }
        this.addLine(html);
      }else if ( command.startsWith('mkdir')) {
        this.mkdir(command);
      }else if ( command.startsWith('cd')) {
        this.cd(command);
      } else {
        this.addLine('Sorry command not available, please use help to list the commands');
      }
    }
    this.input = '';
    this.addLine(this.getCmdLine());
    this.scrollToEnd();
  }

  private cd(command: string): void{
    const folder = command.split(' ')[1];
    if (folder || folder === '..'){
      if (this.folders.indexOf(folder) !== -1){
        console.log('found');
        this.folder = folder;
        console.log(this.folder);
      }else {
        this.addLine('bash: cd: ' + folder + ': directory not found');
      }
    }else {
      this.folder = '~';
    }
  }
  private mkdir(command: string): void{
    if (this.folder !== '~'){
      this.addLine('Permision denied');
      return;
    }
    const folder = command.split(' ')[1];
    if (folder){
      if (this.folders.indexOf(folder) !== -1){
        this.addLine('mkdir: Folder already exist');
      }
      this.folders.push(folder);
    }else {
      this.addLine('mkdir: operator missing');
    }
  }

  private addLine(line: any, newline = true): void {
    if (newline) {
      this.prompt += '<br>';
    }
    this.prompt += line;
  }

  getInnerHTML(): any{
    return this.sanitizer.bypassSecurityTrustHtml(this.prompt);
  }

  setFocus(): void{
    this.inputSh.nativeElement.focus();
  }

  moveInHistory(dir: 'UP' | 'DOWN'): void{
    if (dir === 'DOWN'){
      if (this.historyIndex < this.history.length) {
        this.historyIndex++;
        this.updateField();
      }
    }else {
      if (this.historyIndex > 0) {
        this.historyIndex--;
        this.updateField();
      }
    }
  }
  private scrollToEnd(): void {
    setTimeout(() => {
      const endOfShell = document.getElementById('prompt');
      endOfShell.scrollTop = endOfShell.scrollHeight;
    }, 500);
  }
}
