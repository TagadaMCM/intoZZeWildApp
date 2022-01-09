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

    let placesStr = localStorage.getItem('IntoZZeWild-placesIds');

    if (placesStr != null) {
      placesFound = JSON.parse(placesStr);
    } else {
      placesFound = new Array();
    }

    places.forEach(place => {
      place.found = placesFound.some(placeFound => placeFound === place.id);
    });
    return places;
  }

  getScore() : number {
    let score: number;
    let bonus: number;
    score = 0;
    bonus = 0;
    let placesFound: number[];
    let nbPlacesByCategories: number[] = [0, 0, 0, 0, 0, 0, 0, 0];
    let nbPlacesFoundByCat: number[] = [0, 0, 0, 0, 0, 0, 0, 0];
    const places = data as Place[];
    let placesStr = localStorage.getItem('IntoZZeWild-placesIds');

    if (placesStr != null) {
      placesFound = JSON.parse(placesStr);

      places.forEach(place => {
        place.found = placesFound.some(placeFound => placeFound === place.id);
        nbPlacesByCategories[place.categoryId]++;
        if (place.found) {
          nbPlacesFoundByCat[place.categoryId]++;
          switch (place.level) {
            case "easy": {
              score = score + 1;
              break;
            }
            case "medium": {
              score = score + 3;
              break;
            }
            case "hard": {
              score = score + 5;
              break;
            }
            default: { 
              break; 
           }
          }
        }
      });

      for (let i = 0; i<nbPlacesFoundByCat.length; i++) {
        if (nbPlacesFoundByCat[i]==nbPlacesByCategories[i]) {
          if (i == 0) {
            bonus += 20;
          }
          else {
            bonus += 10;
          }
        }
      }
    }
    return score + bonus;
  }

  checkPlace(placeId: number): void {
    let ids: number[];

    let placesStr = localStorage.getItem('IntoZZeWild-placesIds');

    if (placesStr != null) {
      ids = JSON.parse(placesStr);
      ids = ids.filter(id => id !== placeId);
    } else {
      ids = new Array();
    }
    ids.push(placeId);


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
