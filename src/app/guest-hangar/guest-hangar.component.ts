import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-guest-hangar',
  imports: [],
  templateUrl: './guest-hangar.component.html',
  styleUrl: './guest-hangar.component.scss'
})
export class GuestHangarComponent {
  public forecasts?: WeatherForecast[] = [];

  constructor(private http: HttpClient) {
    this.http.get<WeatherForecast[]>(`${environment.baseUrl}WeatherForecast`).subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}


interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}