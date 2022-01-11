import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import { RuleComponent } from './rule/rule.component';
import { MapComponent } from './map/map.component';
import { PlaceComponent } from './place/place.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { PopUpImgComponent } from './pop-up-img/pop-up-img.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RuleComponent,
    MapComponent,
    PlaceComponent,
    PageTitleComponent,
    PlaceDetailsComponent,
    PopUpImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    PinchZoomModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
