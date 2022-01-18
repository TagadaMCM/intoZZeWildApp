import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from '../service/places.service';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  number: number;

  @Input()
  difficulty: String;

  @Input()
  idPlace: number;

  idCategory: number;

  constructor(private router: Router, private placeService: PlacesService) {
  }

  ngOnInit(): void {
    if (this.number != undefined && this.number != 0) {
      this.idCategory = this.placeService.getPlaces().find(place => place.id == this.number).categoryId;
    }
  }

  goToPlaces() {
    this.router.navigate(['/places', {openedPanelId: this.idCategory}]);
  }
}
