import { Component, OnInit } from '@angular/core';
import {FilesService} from '../../services/files.service';
@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  openedFiles = [];
  current: string | null = 'Experience';
  constructor(private filesService: FilesService) { }

  ngOnInit(): void {
    this.filesService.emitOpenTab.subscribe( tab => {
      // @ts-ignore
      if (this.openedFiles.indexOf(tab) === -1) {
        // @ts-ignore
        this.openedFiles.push(tab);
      }
      this.selectTab(tab);
    });
  }

  closeTab(index: number): void {
    this.openedFiles.splice(index, 1);
    if (this.openedFiles.length === 0){
      this.current = null;
    }else{
      this.current = this.openedFiles[(this.openedFiles.length - 1)];
    }
  }

  selectTab(tab: string): void {
    this.current = tab;
  }

  getIconClass(){
    switch (this.current){
      case 'Education': return 'fas fa-graduation-cap';
      case 'Work Experience': return 'fas fa-id-card-alt';
      case 'Skills': return 'fas fa-code ';
      case 'Languages': return 'fas fa-language';
      case 'About me': return 'fas fa-user-circle';
      default: return '';
    }
  }
}
