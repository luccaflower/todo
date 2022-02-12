import { Component, OnInit } from '@angular/core';
import { GoalsService } from 'src/app/services/goals.service';
import { Goal } from '../Goal';

@Component({
  selector: 'app-accomplishments',
  templateUrl: './accomplishments.component.html',
  styleUrls: ['./accomplishments.component.css'],
})
export class AccomplishmentsComponent implements OnInit {
  goals: Goal[] = [];
  subscription = (goals: Goal[]) =>
    (this.goals = goals.filter((g) => g.accomplished));
  constructor(private service: GoalsService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(this.subscription);
  }

  delete(goal: Goal): void {
    this.service.delete(goal).subscribe(this.subscription);
  }

  update() {
    this.service.getAll().subscribe(this.subscription);
  }
}
