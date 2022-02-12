import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Goal } from '../Goal';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { dateFormat } from '../DateFormat';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})
export class GoalComponent implements OnInit {
  @Output() onDeleteGoal: EventEmitter<Goal> = new EventEmitter();
  @Output() onCompleteGoal: EventEmitter<Goal> = new EventEmitter();
  @Input() goal!: Goal;
  icon = faTimes;
  dateFormat = dateFormat;

  constructor() {}

  ngOnInit(): void {}

  onDelete(goal: Goal): void {
    this.onDeleteGoal.emit(goal);
  }

  onComplete(goal: Goal): void {
    this.onCompleteGoal.emit(goal);
  }
}
