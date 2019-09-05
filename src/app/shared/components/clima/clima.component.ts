import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {

// Imput: objeto: any; 
  @Input() objeto: any;
  @Input() esperaRespuesta: any;

  
  constructor() { }
  
 
  ngOnInit() {
    
  }

}
