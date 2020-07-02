import { Component, OnInit } from '@angular/core';
import {FilesService} from '../../services/files.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  openedFiles = [];
  current = 'Experience';

  constructor(private filesService: FilesService) { }

  ngOnInit(): void {
    this.filesService.emitOpenTab.subscribe( tab => {
      if (this.openedFiles.indexOf(tab) === -1) {
        this.openedFiles.push(tab);
      }
      this.selectTab(tab);
    });
  }

  closeTab(index: number): void {
    this.openedFiles.splice(index, 1);
    if (this.openedFiles.length === 0){
      this.current = null;
    }
  }

  selectTab(tab: string): void {
    this.current = tab;
  }

}
