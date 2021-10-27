import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { parseWebAPIErrors } from 'src/app/utilities/utils';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { genreCreationDTO } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  errors: string[] = [];

  // 1. Router class allows to use navigate method
  // 2. FormBuilder allows to create areactive form
  constructor(private router:Router, private genreService:GenresService) { }

  // a) Create an objet (form) of type FormGroup
  // b) Initialize the object in the ngOInit method
  // c) Inside the form create a property (name)
  // d Pass an array of values to property name. The first is the default value, 
  // then an on¿bject which is an array of methods to such validators

 

  ngOnInit(): void {
 
  
  }


  saveChanges(genreCreationDTO:genreCreationDTO){
    
    this.genreService.create(genreCreationDTO).subscribe( () =>{
      
      this.router.navigate(['/genres']);

    }, error => this.errors = parseWebAPIErrors(error))
  }

  //this.errors = parseWebAPIErrors(error));

}
