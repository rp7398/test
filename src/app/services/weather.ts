import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    return this.http.get(
      `${environment.weatherApiUrl}?q=${city}&appid=${environment.weatherApiKey}&units=metric`
    );
  }
}
