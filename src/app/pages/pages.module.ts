import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { MoviesComponent } from './movies/movies.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { PAGES_ROUTES } from './pages.routing';
import { ActorComponent } from './actor/actor.component';

@NgModule({
  declarations: [
    PagesComponent,
    MoviesComponent,
    ActorComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    PAGES_ROUTES
  ]
})
export class PagesModule { }
