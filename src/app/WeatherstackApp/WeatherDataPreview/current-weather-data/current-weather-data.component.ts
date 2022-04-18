import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, Validators } from "@angular/forms";

//import the store
import { Store } from "@ngrx/store";

//import our store (reducers / actions)
import * as WeatherStore from "../../../Store"; 


@Component({
  selector: 'app-current-weather-data',
  templateUrl: './current-weather-data.component.html',
  styleUrls: ['./current-weather-data.component.css']
})
export class CurrentWeatherDataComponent implements OnInit {

  constructor(private store: Store<WeatherStore.state>) { }

  public weatherData: any;

  public weatherForm = new FormGroup({
    location: new FormControl('', Validators.required),
   
  });
  

  fetchWeather(formData: FormData){
    
    //get the value inside the formData
    let location = formData.getAll("location");
    
    //dispatch the action
    this.store.dispatch(new WeatherStore.FetchWeather(location));  
  }

  ngOnInit() {
    //get the full state
    
    this.store.select(state => state).subscribe((data) => {
      console.log(data);
    })
    
    
    //select from our store using the created "Store Selectors"
    this.store.select(WeatherStore.getWeatherStateData).subscribe((state) => {
      //console.log(data);
      this.weatherData = state; 
      
      if(Object.keys(state).length !== 0){
        this.weatherData = state;
        console.log(this.weatherData)
      }

    });
  }