import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroService } from './services/hero.service';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroListComponent, HeroDetailComponent],
  imports: [CommonModule, FormsModule, HeroesRoutingModule],
  providers: [HeroService]
})
export class HeroesModule {}
