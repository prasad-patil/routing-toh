import { Injectable } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { Observable, of } from 'rxjs';
import { Crisis } from '../models/crisis';
import { CRISES } from '../models/mock-crises';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {
  constructor(private messageService: MessageService) {}

  getCrises(): Observable<Crisis[]> {
    // TODO: send the message _after_ fetching the crises
    this.messageService.add('crisisService: fetched crises');
    return of(CRISES);
  }

  get(id: number): Observable<Crisis> {
    this.messageService.add('crisisService: fetched crisis by id' + id);
    const crisis = CRISES.find(h => h.id === id);
    return of(crisis);
  }
}
