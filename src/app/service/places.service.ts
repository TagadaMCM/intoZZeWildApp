import { Injectable } from '@angular/core';
import {Place} from '../model/Place';
import data from '../../assets/data/places.json';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  getPlaces(): Place[] {
    const places = data as Place[];

    let placesFound: number[];

    if (sessionStorage.getItem('IntoZZeWild-placesIds') != null) {
      placesFound = JSON.parse(sessionStorage.getItem('IntoZZeWild-placesIds'));
    } else {
      placesFound = new Array();
      placesFound.push(3);
    }

    places.forEach(place => {
      place.found = placesFound.some(placeFound => placeFound === place.id);
    });

    return places;
  }

  checkPlace(placeId: number): void {
    console.log("On est dans le service");
    let ids: number[];

    if (sessionStorage.getItem('IntoZZeWild-placesIds') != null) {
      ids = JSON.parse(sessionStorage.getItem('IntoZZeWild-placesIds'));
      ids = ids.filter(id => id !== placeId);
    } else {
      ids = new Array();
    }
    ids.push(placeId);

    sessionStorage.setItem('IntoZZeWild-placesIds', JSON.stringify(ids));
  }

  uncheckPlace(placeId: number): void {
    let ids: number[];

    if (sessionStorage.getItem('IntoZZeWild-placesIds') != null) {
      ids = JSON.parse(sessionStorage.getItem('IntoZZeWild-placesIds'));
      ids = ids.filter(id => id !== placeId);
      sessionStorage.setItem('IntoZZeWild-placesIds', JSON.stringify(ids));
    }
  }
}
