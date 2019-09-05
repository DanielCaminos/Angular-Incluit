import { Component } from '@angular/core';
import {WeatherService} from './shared/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private weaterService :WeatherService)
  {
    // this.weaterService.getWeather({}).subscribe(
    //   res => console.log(res),
    //   error => console.log(error)
    // )
  }
}


