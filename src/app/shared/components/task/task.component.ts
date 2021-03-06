import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Output() delete = new EventEmitter();
  @Output() update = new EventEmitter();
  


  constructor() { }
  
  ngOnInit() {
  }

  deleteTask(): void {
    this.delete.emit();
  }

  updateTask(task:Task):void
  {
    task.realizada=!task.realizada;
    this.update.emit();
  }

}
