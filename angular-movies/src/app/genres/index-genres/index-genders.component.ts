import { Component, OnInit } from '@angular/core';
import { genreDTO } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-index-genders',
  templateUrl: './index-genders.component.html',
  styleUrls: ['./index-genders.component.css']
})
export class IndexGendersComponent implements OnInit {

  constructor(private genresService:GenresService) { }

  genres!:genreDTO[];
  columnsToDisplay:string[] = ['name', 'actions'];

  ngOnInit(): void {

   this.loadGenres();
  }


  loadGenres(){
    this.genresService.getAll().subscribe( genres => {
      this.genres = genres;
    });
  }

  delete(id:number){
    this.genresService.delete(id).subscribe( () => {
       this.loadGenres();
    });
  }

}
