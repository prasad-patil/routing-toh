import { Component, OnInit } from '@angular/core';
import { Crisis } from '../../models/crisis';
import { CrisisService } from '../../services/crisis.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  crisis$: Observable<Crisis>;

  constructor(
    private route: ActivatedRoute,
    private crisisService: CrisisService
  ) {}

  ngOnInit() {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap(p => {
        return this.crisisService.get(+p.get('id'));
      })
    );
    this.crisis$.subscribe(h => console.log(h));
  }
}
