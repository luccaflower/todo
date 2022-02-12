import { Component, ViewChild } from '@angular/core';
import { AccomplishmentsComponent } from '../accomplishments/accomplishments.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  @ViewChild(AccomplishmentsComponent)
  accomplishments!: AccomplishmentsComponent;

  onUpdate() {
    this.accomplishments.update();
  }
}
