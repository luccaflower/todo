import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Goal } from '../components/Goal';

@Injectable({
  providedIn: 'root',
})
export class GoalsService {
  apiUrl = 'http://0.0.0.0:5000/goals';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Goal[]> {
    return this.http.get<Goal[]>(this.apiUrl).pipe(map(responseToGoal));
  }

  add(goal: Goal): Observable<Goal[]> {
    return this.http
      .post<Goal[]>(this.apiUrl + '/add', goal)
      .pipe(map(responseToGoal));
  }

  delete(goal: Goal): Observable<Goal[]> {
    return this.http
      .post<Goal[]>(this.apiUrl + '/delete', goal)
      .pipe(map(responseToGoal));
  }

  deleteAll(): Observable<Goal[]> {
    return this.http.delete<Goal[]>(this.apiUrl).pipe(map(responseToGoal));
  }

  complete(goal: Goal): Observable<Goal[]> {
    return this.http
      .post<Goal[]>(this.apiUrl + '/complete', goal)
      .pipe(map(responseToGoal));
  }
}

const responseToGoal = (goals: Goal[]) =>
  goals.map((g) => {
    if (g.accomplished) g.accomplished = new Date(String(g.accomplished));
    if (g.deadline) g.deadline = new Date(String(g.deadline));
    return g;
  });
