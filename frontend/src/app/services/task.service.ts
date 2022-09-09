import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor( private webRequestService: WebRequestService) { }

  /* purpose: sending a web request to create a new list */
  createList(title:string) {
    return this.webRequestService.post('lists', { title });
  }

  /* purpose: get(read) the lists created */
  getLists() {
    return this.webRequestService.get('lists');
  }

  /* purpose: get(read) the tasks corresponding to a specific list */
  getTasks(_listId: string) {
    return this.webRequestService.get(`lists/$(listId)/tasks`);
  }
}
