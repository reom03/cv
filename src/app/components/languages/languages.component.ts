import { Component, OnInit } from '@angular/core';
import {Language} from '../../model/language';
import {FilesService} from '../../services/files.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  languages: Language[] = [];
  constructor(private filesService: FilesService) { }

  ngOnInit(): void {
    this.languages = this.filesService.getLanguage();
  }

}
