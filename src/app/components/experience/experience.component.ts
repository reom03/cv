import { Component, OnInit } from '@angular/core';
import {FilesService} from '../../services/files.service';
import {Job} from '../../model/Job';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  jobs: Job[] = [];
  constructor(private filesService: FilesService) { }

  ngOnInit(): void {
    this.jobs = this.filesService.getJobs();
  }

}
