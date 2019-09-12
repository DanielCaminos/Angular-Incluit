import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../interfaces/task';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() taskList: Array<Task> = [];

  constructor( private localStorageService:LocalStorageService) { }

  ngOnInit() {  
    
  }

  deleteTask(index : number): void
  {
    this.taskList.splice(index, 1);
    this.localStorageService.updateAll('tasks',this.taskList);

  }
  updateTask():void
  {
    this.localStorageService.updateAll('tasks',this.taskList); 

  }


}
