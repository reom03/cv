import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
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
