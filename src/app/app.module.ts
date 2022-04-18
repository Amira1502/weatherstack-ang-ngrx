import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// import component
import { AppComponent } from './app.component';
import { SearchBarComponent } from './WeatherstackApp/search-bar/search-bar.component';
import { BookmarkedLocationsComponent } from './WeatherstackApp/bookmarked-locations/bookmarked-locations.component';
import { WeatherLocationComponent } from './WeatherstackApp/WeatherDataPreview/weather-location/weather-location.component';
import { CurrentWeatherDataComponent } from './WeatherstackApp/WeatherDataPreview/current-weather-data/current-weather-data.component';

// 
import {HttpClientModule} from "@angular/common/http";
import {WeatherService} from "./Services/weather.service";

//import the NGRX Store
import {StoreModule} from "@ngrx/store";

//import effects module
import { EffectsModule } from "@ngrx/effects"; 

//import the reducers from the store
import {reducers, effects} from "./Store";

// import angular material ui 
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';


// import katex css
import { KatexModule } from 'ng-katex';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HistoricalWeatherCardComponent } from './WeatherstackApp/WeatherDataPreview/HistoricalWeatherData/historical-weather-card/historical-weather-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    BookmarkedLocationsComponent,
    WeatherLocationComponent,
    CurrentWeatherDataComponent,
    HistoricalWeatherCardComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({weather: reducers.weather}), //access using the createFeatureSelector
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(effects),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    KatexModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
