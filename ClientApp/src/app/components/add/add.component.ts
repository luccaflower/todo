import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { Goal } from '../Goal';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddComponent implements OnInit {
  @Output() onAddGoal: EventEmitter<Goal> = new EventEmitter();

  title: string = '';
  description: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const goal = {
      title: this.title,
      description: this.description,
    };

    this.onAddGoal.emit(goal);

    this.title = '';
    this.description = '';
  }
}
