import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { MyTasksComponent } from './pages/my-tasks/my-tasks.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{WeatherService} from './shared/services/weather.service';


import { ClimaComponent } from './shared/components/clima/clima.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';









@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    MyTasksComponent,
    
    ClimaComponent,

    LoginComponent,

    NavbarComponent,
    

    
    
   
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    

  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
