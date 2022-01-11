import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  filter: String;

  constructor() { }

  ngOnInit(): void {
    this.filter = "difficulty";
  }

  onValChange(value){
    this.filter = value;
  }
}
