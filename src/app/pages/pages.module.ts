import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { MoviesComponent } from './movies/movies.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { PAGES_ROUTES } from './pages.routing';
import { ActorComponent } from './actor/actor.component';
import { PipesModule } from '../pipes/pipes.module';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    PagesComponent,
    MoviesComponent,
    ActorComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    PAGES_ROUTES,
    PipesModule
  ]
})
export class PagesModule { }
