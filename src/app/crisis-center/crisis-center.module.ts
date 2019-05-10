import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisDetailComponent } from './components/crisis-detail/crisis-detail.component';
import { CrisesListComponent } from './components/crises-list/crises-list.component';
import { FormsModule } from '@angular/forms';
import { CrisisService } from './services/crisis.service';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './components/crisis-center-home/crisis-center-home.component';

@NgModule({
  declarations: [
    CrisisDetailComponent,
    CrisesListComponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent
  ],
  imports: [CommonModule, FormsModule, CrisisCenterRoutingModule],
  providers: [CrisisService]
})
export class CrisisCenterModule {}
