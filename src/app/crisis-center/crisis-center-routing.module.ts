import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisesListComponent } from './components/crises-list/crises-list.component';
import { CrisisDetailComponent } from './components/crisis-detail/crisis-detail.component';

const routes: Routes = [
  { path: 'crisis-center', component: CrisesListComponent },
  { path: 'crisis/:id', component: CrisisDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule {}
