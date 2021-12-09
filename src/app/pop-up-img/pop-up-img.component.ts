import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../place-details/place-details.component';

@Component({
  selector: 'app-pop-up-img',
  templateUrl: './pop-up-img.component.html',
  styleUrls: ['./pop-up-img.component.css']
})
export class PopUpImgComponent implements OnInit {

  //private view: View;

  constructor(public dialogRef: MatDialogRef<PopUpImgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    
  }

}
