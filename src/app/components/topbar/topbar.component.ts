import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import * as introJs from 'intro.js/intro.js';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  introJS = introJs();
  constructor(public dialog: MatDialog) {
    this.introJS.setOptions({
      steps: [
        {
          intro: 'Welcome to my IDE Theme Resume!',
          position: 'bottom'
        },
        {
          element: '#me',
          intro: 'That would be me, and what I consider my self professionally or what I know the most',
          position: 'bottom'
        },
        {
          element: '#menu',
          intro: 'Here you can download my CV in PDF, or take a look at my social media!!',
          position: 'top'
        },
        {
          element: '#files',
          intro: 'This you can find all my information, just click on each \"File\" and it will open as a tab',
          position: 'right'
        },
        {
          element: '#tabs',
          intro: 'The info will show up here, you can close and open again as you want',
          position: 'top'
        },
        {
          element: '#shell',
          intro: 'Here is a Shell for you to enjoy, give it a try! It was pretty fun to develop this part..',
          position: 'right'
        },
        {
          element: '#center',
          intro: 'Well that\'s all, knock yourself out, and thanks for the visit!!!',
          position: 'right'
        }
      ],
      showProgress: true,
    });

  }

  ngOnInit(): void {

    if (!localStorage.getItem('dismiss')) {
      this.introJS.start();
    }
    this.introJS.onexit(() => {
      localStorage.setItem('dismiss', 'true');
    });
  }

  openSnackBar(): void {
    const dialogRef = this.dialog.open(AboutDialogComponent);
  }

}

@Component({
  selector: 'app-about',
  templateUrl: 'about-dialog.html',
})
export class AboutDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AboutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
