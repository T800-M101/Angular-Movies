import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  constructor() { }

  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  markdownContent:any = '';

  @Input()
  label = 'Value';

  ngOnInit(): void {
  }

  onChangeContent(){
    this.changeMarkdown.emit(this.markdownContent);
  }




}
