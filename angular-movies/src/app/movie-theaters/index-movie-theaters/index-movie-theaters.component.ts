import { Component, OnInit } from '@angular/core';
import { MovieTheatersService } from '../movie-theaters.service';

@Component({
  selector: 'app-index-movie-theaters',
  templateUrl: './index-movie-theaters.component.html',
  styleUrls: ['./index-movie-theaters.component.css']
})
export class IndexMovieTheatersComponent implements OnInit {


  constructor(private movieTheatersService:MovieTheatersService) { }
   
  movieTheaters:any[] = [];
  displayColumns = ['name', 'actions'];

  ngOnInit(): void {

    this.loadData();
  }
  
  
  
  loadData(){
    
    this.movieTheatersService.get().subscribe(movieTheaters => this.movieTheaters = movieTheaters);
  }

  delete(id:number){
    this.movieTheatersService.delete(id).subscribe(() => {
       this.loadData();
    });
  }
}
