import { Component, OnInit, TemplateRef, Output, EventEmitter } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from '../../interfaces/task';



@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  public modalRef: BsModalRef;
  public newTaskForm: FormGroup;

  @Output() newTask = new EventEmitter<Task>();
 

  constructor(private modalServie: BsModalService) { }
  

  ngOnInit() {
    this.builFrom();
  }

  builFrom():void{
    this.newTaskForm=new FormGroup
    ({
      title: new FormControl('',[Validators.required,Validators.minLength(3)]),
      description: new FormControl('',[Validators.required]),
      date: new FormControl(null),
      deadline: new FormControl('',[Validators.required]),

    })
  }

  confirmTask(): void{
    this.newTask.emit(this.newTaskForm.value);    
    console.log(this.newTaskForm.value);
    this.modalRef.hide();
    this.newTaskForm.reset();
  }



  public openAddModal(template: TemplateRef<any>): void {
    // le paso un modelo 
    this.modalRef = this.modalServie.show(template);
    this.newTaskForm.get('date').setValue(new Date());
  }

}

