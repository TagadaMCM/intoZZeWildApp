import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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

  constructor(private router: Router, private route: ActivatedRoute, public placeService: PlacesService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params.id;

    const places = this.placeService.getPlaces();
    this.place = places.find(p => p.id === this.id);
    this.hintImage = this.place.tip.includes("hint");
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
