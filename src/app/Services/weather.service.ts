import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeatherData(city: any): Observable<any> {
    let historical_dates = new Date();
    return this.httpClient.get(
      `http://api.weatherstack.com/current?access_key=aba684555f49dc935f36ad3a15334642&query=${location}&historical_date=${historical_dates}`
    );
  }
 
}
