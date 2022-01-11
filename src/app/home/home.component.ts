import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('openedPanelId', JSON.stringify(-1));
  }

  goToPlaces() {
    this.router.navigate(['/places', {openedPanelId: -1}]);
  }
}
