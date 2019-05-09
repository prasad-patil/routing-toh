import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';
import { Hero } from '../models/hero';
import { HEROES } from '../models/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  get(id: number): Observable<Hero> {
    this.messageService.add('HeroService: fetched hero by id' + id);
    const hero = HEROES.find(h => h.id === id);
    return of(hero);
  }
}
