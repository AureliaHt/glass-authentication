import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks-manager',
  templateUrl: './tasks-manager.component.html',
  styleUrls: ['./tasks-manager.component.css']
})
export class TasksManagerComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  createNewList() {
    this.taskService.createList('testing add button again').subscribe((res: any) => {
      console.log(res);
    });
  }
}
