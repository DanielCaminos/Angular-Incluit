import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 public password:string;
 public email:string
  

  constructor(private localStoreService:LocalStorageService, private router:Router) { }

  ngOnInit() {

  }
  public ingresarUser():void
  {
    let fullUser= btoa(this.email.concat(this.password));
    this.localStoreService.create('user',fullUser);
    this.router.navigateByUrl('/home');
  
  }

}
