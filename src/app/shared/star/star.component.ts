import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rating: number;
  @Output() ratingClicked : EventEmitter<string> = new EventEmitter();
  starWidth : number;

  constructor() { }

  ngOnChanges() {
    this.starWidth = this.rating * 86/5;
    console.log('Rating = '+this.rating);
  }

  emitEvent() : void {
    this.ratingClicked.emit('Rating = '+this.rating);
  }
}
