import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { LocalStorageService } from '../shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
constructor(private router: Router,private localStorageService:LocalStorageService)
{
  
}

  canActivate():boolean
  {
    console.log("Pso el login")
    if(this.localStorageService.retrieve('user'))
    {
      return true
    }
    else
    {
      
      this.router.navigateByUrl('/login');
      return false
    }
    
  }
  
}
