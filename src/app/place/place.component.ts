import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';
import {Place} from '../model/Place';
import {PlacesService} from '../service/places.service';


@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  panelSponsorsOpenState = false;
  panelSportOpenState = false;
  panelTransportOpenState = false;
  panelEducationOpenState = false;
  panelEspaceOpenState = false;
  panelAssociatifOpenState = false;
  panelCultureOpenState = false;
  panelMunicipaliteOpenState = false;

  sponsorsPlaces: Place[] = [];
  sportsPlaces: Place[] = [];
  transportPlaces: Place[] = [];
  educationPlaces: Place[] = [];
  espacePlaces: Place[] = [];
  associatifPlaces: Place[] = [];
  culturePlaces: Place[] = [];
  municipalitePlaces: Place[] = [];


  places: Place[];
  score: number;

  constructor(placesService: PlacesService) {
    this.places = placesService.getPlaces();
    this.score = placesService.getScore();
    this.places.forEach(place => {
      switch (place.categoryId) {
        case 0: {
          this.sponsorsPlaces.push(place);
        }
        break;
        case 1:{
          this.sportsPlaces.push(place);
        }
        break;
        case 2:{
          this.transportPlaces.push(place);
        }
        break;
        case 3:{
          this.educationPlaces.push(place);
        }
        break;
        case 4:{
          this.espacePlaces.push(place);
        }
        break;
        case 5:{
          this.associatifPlaces.push(place);
        }
        break;
        case 6:{
          this.culturePlaces.push(place);
        }
        break;
        case 7:{
          this.municipalitePlaces.push(place);
        }
        break;
      }
    });
  }

  ngOnInit() {

  }

}
