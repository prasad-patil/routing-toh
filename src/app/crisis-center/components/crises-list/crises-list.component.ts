import { Component, OnInit } from '@angular/core';
import { Crisis } from '../../models/crisis';
import { CrisisService } from '../../services/crisis.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-crises-list',
  templateUrl: './crises-list.component.html',
  styleUrls: ['./crises-list.component.css']
})
export class CrisesListComponent implements OnInit {
  selectedcrisis: Crisis;
  crises$: Observable<Crisis[]>;
  selectedId: number;

  constructor(
    private crisisService: CrisisService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getcrises();
  }

  onSelect(crisis: Crisis): void {
    this.selectedcrisis = crisis;
  }

  getcrises(): void {
    this.crises$ = this.route.paramMap.pipe(
      switchMap(p => {
        this.selectedId = +p.get('id');
        return this.crisisService.getCrises();
      })
    );
  }
}
