import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }

  @Input()
  maxRating:number = 5;
  @Input()
  selectedRate:number = 0;

  @Output()
  onRating:EventEmitter<number> = new EventEmitter<number>();
  previousRate:number = 0;
  maxRatingArr:number[] = [];

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0);
    
  }

  handleMouseEnter(index:number){
     this.selectedRate = index + 1;
     
  }

  handleMouseLeave(){

    this.previousRate!== 0 ? this.selectedRate = this.previousRate  : this.selectedRate = 0; 
   
    
  }

  rate(index:number){
    this.selectedRate = index + 1;
    this.previousRate = this.selectedRate;

    this.onRating.emit(this.selectedRate);
    
  
    
  }

}
