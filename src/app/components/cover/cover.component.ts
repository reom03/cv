import { Component, OnInit } from '@angular/core';
declare function LIRenderAll(): any;
@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   // LIRenderAll();
  }

}
