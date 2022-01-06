import { Injectable } from '@angular/core';
import {Place} from '../model/Place';
import data from '../../assets/data/places.json';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  getPlaces(): Place[] {
    console.log("getPlaces ...");
    const places = data as Place[];

    let placesFound: number[];

    let placesStr = localStorage.getItem('IntoZZeWild-placesIds');

    console.log("placesStr = ", placesStr);

    if (placesStr != null) {
      placesFound = JSON.parse(placesStr);
    } else {
      placesFound = new Array();
    }

    places.forEach(place => {
      place.found = placesFound.some(placeFound => placeFound === place.id);
    });

    console.log("placesStr = ", placesStr);

    console.log("getPlaces done.");
    return places;
  }

  checkPlace(placeId: number): void {
    console.log("checkPlace ... ", placeId);
    let ids: number[];

    let placesStr = localStorage.getItem('IntoZZeWild-placesIds');

    console.log("placesStr = ", placesStr);

    if (placesStr != null) {
      ids = JSON.parse(placesStr);
      console.log("ids before filtering = ", ids);
      ids = ids.filter(id => id !== placeId);
      console.log("ids after filtering = ", ids);
    } else {
      ids = new Array();
    }
    ids.push(placeId);

    console.log("ids before save = ", ids);

    localStorage.setItem('IntoZZeWild-placesIds', JSON.stringify(ids));
  }

  uncheckPlace(placeId: number): void {
    let ids: number[];

    if (localStorage.getItem('IntoZZeWild-placesIds') != null) {
      ids = JSON.parse(localStorage.getItem('IntoZZeWild-placesIds'));
      ids = ids.filter(id => id !== placeId);
      localStorage.setItem('IntoZZeWild-placesIds', JSON.stringify(ids));
    }
  }
}
