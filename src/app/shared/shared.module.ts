import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { HeaderComponent } from './components/header/header.component';
import{ModalModule} from 'ngx-bootstrap'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LocalStorageService } from './services/local-storage.service';
import{HttpClientModule} from '@angular/common/http';







@NgModule({
  declarations: [TaskComponent, TaskListComponent, AddTaskComponent, HeaderComponent, ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
    ,ReactiveFormsModule
    ,BsDatepickerModule.forRoot()
    ,HttpClientModule
  ],
  providers: [
    LocalStorageService
  ]
  ,
  exports:[TaskComponent, TaskListComponent, AddTaskComponent, HeaderComponent ]
})
export class SharedModule { }
