import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalComponent } from './goal/goal.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';
import { GoalsComponent } from './goals/goals.component';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTabsModule } from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AccomplishmentsComponent } from './accomplishments/accomplishments.component';

@NgModule({
  declarations: [
    GoalComponent,
    HomeComponent,
    GoalsComponent,
    NavMenuComponent,
    AppComponent,
    AddComponent,
    AccomplishmentsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ]),
    FormsModule,
    FontAwesomeModule,
    MatTabsModule,
    NoopAnimationsModule,
  ],
  exports: [],
})
export class ComponentsModule {}
