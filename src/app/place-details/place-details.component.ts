import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { PopUpImgComponent } from '../pop-up-img/pop-up-img.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Place} from '../model/Place';
import {PlacesService} from '../service/places.service';

export interface DialogData {
  image: string;
}


@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {

  place: Place;

  public id: number;
  image: string;
  hintImage: boolean;

  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog, public placeService: PlacesService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params.id;

    const places = this.placeService.getPlaces();
    this.place = places.find(p => p.id === this.id);
    this.hintImage = this.place.tip.includes("hint");
  }

  openDialog(img: String) {
    const dialogRef = this.dialog.open(PopUpImgComponent, {
      width: '400px',
      height: '400px',
      data: {image: img}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    this.router.navigate(['zoom/image/' + this.id, {img: this.place.image}]);
  }

  checkPlace(): void {
    this.placeService.checkPlace(this.id);
    console.log("Le lieu a ajoute est le " + this.id);

    // reload places ...
    const places = this.placeService.getPlaces();
    this.place = places.find(p => p.id === this.id);

    // redirect to the places page
    this.router.navigate(['/places']);
  }

  uncheckPlace(): void {
    this.placeService.uncheckPlace(this.id);

    // reload places ...
    const places = this.placeService.getPlaces();
    this.place = places.find(p => p.id === this.id);

    // redirect to the places page
    this.router.navigate(['/places']);
  }

  changeCheckPlace() {
    if (this.place.found) {
      this.uncheckPlace();
    } else {
      this.checkPlace();
    }
  }

}
