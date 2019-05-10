import { Component, OnInit } from '@angular/core';
import { Crisis } from '../../models/crisis';
import { CrisisService } from '../../services/crisis.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis$: Observable<Crisis>;
  crisis: Crisis;
  editedName: string;

  constructor(
    private route: ActivatedRoute,
    private crisisService: CrisisService,
    private router: Router
  ) {
    this.editedName = '';
  }

  ngOnInit() {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap(p => {
        return this.crisisService.get(+p.get('id'));
      })
    );
    this.crisis$.subscribe(h => {
      this.crisis = h;
      this.editedName = h.name;
    });
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editedName;
    this.gotoCrises();
  }

  gotoCrises() {
    let crisisId = this.crisis ? this.crisis.id : null;
    // Pass along the crisis id if available
    // so that the CrisisListComponent can select that crisis.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], {
      relativeTo: this.route
    });
  }
}
