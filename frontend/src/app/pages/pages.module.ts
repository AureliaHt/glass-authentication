import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TaskService } from '../services/task.service';
import { WebRequestService } from '../services/web-request.service';

import { TasksManagerComponent } from './tasks-manager/tasks-manager.component';
import { AddNewListComponent } from './add-new-list/add-new-list.component';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';

const tasksManagerRoutes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full'},
  { path: 'new-list', component: AddNewListComponent},
  { path: 'new-task', component: AddNewTaskComponent},
  { path: 'lists', component: TasksManagerComponent},
  { path: 'lists/:listId', component: TasksManagerComponent}
]

@NgModule({
  declarations: [
    TasksManagerComponent,
    AddNewListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(tasksManagerRoutes)
  ],
  providers: [
    TaskService,
    WebRequestService
  ]
})
export class PagesModule { }
