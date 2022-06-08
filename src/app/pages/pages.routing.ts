import { RouterModule, Routes } from "@angular/router";
import { ActorComponent } from "./actor/actor.component";
import { MoviesComponent } from "./movies/movies.component";

const PagesRoutes: Routes = [
    {
      path: 'movies',
      component: MoviesComponent
    },
    {
      path: 'actors',
      component: ActorComponent
    },
];
export const PAGES_ROUTES = RouterModule.forChild(PagesRoutes);
