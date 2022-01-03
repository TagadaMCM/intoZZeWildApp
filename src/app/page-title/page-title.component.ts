import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  number: number;

  @Input()
  difficulty: String;

  @Input()
  idPlace: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
