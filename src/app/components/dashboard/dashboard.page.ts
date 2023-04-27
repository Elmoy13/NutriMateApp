import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  dailyCalories = 2000;
  consumedCalories = 1200;
  remainingCalories = this.dailyCalories - this.consumedCalories;
  carbs = 150;
  proteins = 100;
  fats = 50;
  percentage = 50;

  constructor() { }

  ngOnInit() {
  }

}
