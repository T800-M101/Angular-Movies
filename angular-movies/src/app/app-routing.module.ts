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
import { IsAdminGuard } from './is-admin.guard';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { UsersIndexComponent } from './security/users-index/users-index.component';

const routes: Routes = [
  {path:'', component:HomeComponent},

  {path:'genres', component:IndexGendersComponent, canActivate:[IsAdminGuard]},
  {path:'genres/create', component:CreateGenreComponent, canActivate:[IsAdminGuard]},
  {path:'genres/edit/:id', component:EditGenreComponent, canActivate:[IsAdminGuard]},

  {path:'actors', component:IndexActorsComponent, canActivate:[IsAdminGuard]},
  {path:'actors/create', component:CreateActorComponent, canActivate:[IsAdminGuard]},
  {path:'actors/edit/:id', component:EditActorComponent, canActivate:[IsAdminGuard]},

  {path:'movietheaters', component:IndexMovieTheatersComponent, canActivate:[IsAdminGuard]},
  {path:'movietheaters/create', component:CreateMovieTheaterComponent, canActivate:[IsAdminGuard]},
  {path:'movietheaters/edit/:id', component:EditMovieTheaterComponent, canActivate:[IsAdminGuard]},

  {path:'movies/create', component:CreateMovieComponent, canActivate:[IsAdminGuard]},
  {path:'movies/edit/:id', component:EditMovieComponent, canActivate:[IsAdminGuard]},
  {path:'movies/filter', component:MovieFilterComponent},
  {path:'movie/:id', component:MovieDetailsComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'users', component:UsersIndexComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
