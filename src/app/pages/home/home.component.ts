import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/shared/services/weather.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public respuesta : any=null;
  public objeto:any=null;
  public esperaRespuesta:boolean=false;

  constructor(private clima:WeatherService) { }

  ngOnInit() {
  }
  searchWeather(param : string):void
  {
    this.esperaRespuesta=true;
    let params={
      q: param,
      units: 'metric',
      type: 'accurate'

    }
    this.clima.getWeather(params).subscribe(
      res => {
        this.esperaRespuesta=false;
        this.respuesta = res;
        this.objeto = res;
        console.log(this.respuesta);
        
      },err => console.error(err)
    )
  }

}
