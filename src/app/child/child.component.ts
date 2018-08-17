import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() c_counter: number;

  @Output() change: EventEmitter<number> = new EventEmitter();


  handle_click() {
  	this.change.emit();
  }

}
