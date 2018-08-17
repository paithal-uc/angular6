import { Component, OnInit } from '@angular/core';

import { DataService } from './../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private service: DataService) { }

  data: any;

  ngOnInit() {
    this.service.getData().subscribe(res => {
        this.data = res.json();
        debugger;
    });
  }

  p_counter: number = 10;

  updateCounter() {
  	this.p_counter++;
  }

}
