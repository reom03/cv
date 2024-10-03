import { Component, OnInit } from '@angular/core';
import {Skill} from '../../model/Skill';
import {FilesService} from '../../services/files.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [];
  preview = true;
  constructor(private filesService: FilesService) { }

  ngOnInit(): void {
    this.skills = this.filesService.getSkills();
  }

  showPreview(): boolean {
    return this.preview;
  }
}
