import { Component, Input, OnInit } from '@angular/core';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-authorize-view',
  templateUrl: './authorize-view.component.html',
  styleUrls: ['./authorize-view.component.css']
})
export class AuthorizeViewComponent implements OnInit {

  constructor(private securiryService:SecurityService) { }

  ngOnInit(): void {
  }

  @Input()
  role!:string;

  public isAuthorized(){
    if(this.role){
      return this.securiryService.getRole() === this.role;
    }else{

      return this.securiryService.isAuthenticated();
    }
  }

}
