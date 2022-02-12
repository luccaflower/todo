import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Goal } from '../components/Goal';
import { GOALS } from './goals-mock';
import { v4 as uuid } from 'uuid';
@Injectable({
  providedIn: 'root',
})
export class MockedGoalsService {
  goals: Map<string, Goal>;

  constructor() {
    this.goals = GOALS.reduce((map: Map<string, Goal>, g) => {
      g.uuid = uuid();
      map.set(g.uuid, g);
      return map;
    }, new Map());
  }

  getAll(): Observable<Goal[]> {
    return of([...this.goals.values()]);
  }

  add(goal: Goal): Observable<Goal[]> {
    goal.uuid = uuid();
    this.goals.set(goal.uuid, goal);
    return of([...this.goals.values()]);
  }

  delete(goal: Goal) {
    this.goals.delete(goal.uuid!);
    return of([...this.goals.values()]);
  }

  complete(goal: Goal) {
    this.goals.get(goal.uuid!)!.accomplished = new Date();
    return of([...this.goals.values()]);
  }
}
