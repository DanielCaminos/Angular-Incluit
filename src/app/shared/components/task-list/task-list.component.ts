import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() taskList: Array<Task> = [];

  constructor() { }

  ngOnInit() {  
    
  }

  deleteTask(index : number): void
  {
    this.taskList.splice(index, 1);

  }


}
