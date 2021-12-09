import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { PlaceComponent } from './place/place.component';
import { RuleComponent } from './rule/rule.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "rules",
    component: RuleComponent
  },
  {
    path: "map",
    component: MapComponent
  },
  {
    path: "places",
    component: PlaceComponent
  },
  {
    path: 'places/:id',
    component: PlaceDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
