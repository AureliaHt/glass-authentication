import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor( private webRequestService: WebRequestService) { }

  /* purpose: sending a web request to create a new list */
  createList() {
    this.webRequestService.post('./list', { title:String });
  }
}