import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GoalsService } from 'src/app/services/goals.service';
import { Goal } from '../Goal';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css'],
})
export class GoalsComponent implements OnInit {
  goals: Goal[] = [];
  @Output() onUpdate: EventEmitter<null> = new EventEmitter();

  subscription = (goals: Goal[]) =>
    (this.goals = goals.filter((goal) => !goal.accomplished));

  constructor(private service: GoalsService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(this.subscription);
  }

  add(goal: Goal): void {
    this.service.add(goal).subscribe(this.subscription);
  }

  delete(goal: Goal): void {
    this.service.delete(goal).subscribe(this.subscription);
  }

  complete(goal: Goal): void {
    this.service.complete(goal).subscribe(this.subscription);
    this.onUpdate.emit();
  }
}
