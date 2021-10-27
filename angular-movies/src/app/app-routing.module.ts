import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexGendersComponent } from './genres/index-genres/index-genders.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { HomeComponent } from './home/home.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';

import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { IndexMovieTheatersComponent } from './movie-theaters/index-movie-theaters/index-movie-theaters.component';
import { CreateMovieTheaterComponent } from './movie-theaters/create-movie-theater/create-movie-theater.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { EditMovieTheaterComponent } from './movie-theaters/edit-movie-theater/edit-movie-theater.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';

const routes: Routes = [
  {path:'', component:HomeComponent},

  {path:'genres', component:IndexGendersComponent},
  {path:'genres/create', component:CreateGenreComponent},
  {path:'genres/edit/:id', component:EditGenreComponent},

  {path:'actors', component:IndexActorsComponent},
  {path:'actors/create', component:CreateActorComponent},
  {path:'actors/edit/:id', component:EditActorComponent},

  {path:'movietheaters', component:IndexMovieTheatersComponent},
  {path:'movietheaters/create', component:CreateMovieTheaterComponent},
  {path:'movietheaters/edit/:id', component:EditMovieTheaterComponent},

  {path:'movies/create', component:CreateMovieComponent},
  {path:'movies/edit/:id', component:EditMovieComponent},
  {path:'movies/filter', component:MovieFilterComponent},
  {path:'movie/:id', component:MovieDetailsComponent},

  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
