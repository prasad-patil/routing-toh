import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisesListComponent } from './components/crises-list/crises-list.component';
import { CrisisDetailComponent } from './components/crisis-detail/crisis-detail.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './components/crisis-center-home/crisis-center-home.component';

const routes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisesListComponent,
        children: [
          { path: ':id', component: CrisisDetailComponent },
          { path: '', component: CrisisCenterHomeComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule {}
