import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-new-list',
  templateUrl: './add-new-list.component.html',
  styleUrls: ['./add-new-list.component.css']
})
export class AddNewListComponent implements OnInit {

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  createList(title:string) {
    this.taskService.createList(title).subscribe((res:any) => {
      console.log(res);
      /* purpose: redirect the user when adding a new list and modify the route with the id of the new list */
      this.router.navigate(['/lists', res._id]);
    });
  }
}
