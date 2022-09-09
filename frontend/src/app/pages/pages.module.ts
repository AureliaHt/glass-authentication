import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TaskService } from '../services/task.service';
import { WebRequestService } from '../services/web-request.service';

import { TasksManagerComponent } from './tasks-manager/tasks-manager.component';
import { AddNewListComponent } from './add-new-list/add-new-list.component';

const tasksManagerRoutes: Routes = [
  { path: 'new-list', component: AddNewListComponent},
  { path: 'lists/:listId', component: TasksManagerComponent}
]

@NgModule({
  declarations: [
    TasksManagerComponent,
    AddNewListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(tasksManagerRoutes)
  ],
  providers: [
    TaskService,
    WebRequestService
  ]
})
export class PagesModule { }
