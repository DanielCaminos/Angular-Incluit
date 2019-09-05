import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { MyTasksComponent } from './pages/my-tasks/my-tasks.component';
import { LoginComponent } from './pages/login/login.component';





const routes: Routes = 
[
{
  path: 'home',
  component: HomeComponent
}
,
{
  path: 'tasks',
  component: MyTasksComponent
}
,
{
  path: 'login',
  component: LoginComponent
  
},


{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}
,
{
  path: '**',
  redirectTo: 'home',
  pathMatch: 'full'
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
