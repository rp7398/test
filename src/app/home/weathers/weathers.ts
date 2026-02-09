import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from '../../services/weather';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [WeatherService],
  templateUrl: './weathers.html'
})
export class WeathersComponent {

  city = '';
  weather: any;
error: any;
  loading!: boolean;

  constructor(private weatherService: WeatherService) {}

  checkWeather() {
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => this.weather = data,
      error: () => alert('Weather API failed')
    });
  }
}
