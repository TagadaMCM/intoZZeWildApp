import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogData } from '../place-details/place-details.component';

@Component({
  selector: 'app-pop-up-img',
  templateUrl: './pop-up-img.component.html',
  styleUrls: ['./pop-up-img.component.css']
})
export class PopUpImgComponent implements OnInit {

  //private view: View;
  img: String;
  id: number;

  constructor(private route: ActivatedRoute) { 
      this.id = this.route.snapshot.params.id;
      this.img = this.route.snapshot.params.img;
  }

  ngOnInit(): void {
    
  }

}
