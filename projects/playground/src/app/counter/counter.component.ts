import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  @Input('initial-value') counter = 0;
  @Input('step') step = 1;

  __calculateStep(increment: boolean) {
    if (increment) {
      this.counter = this.counter + this.step;
    } else {
      this.counter = this.counter - this.step;

      if (this.counter < 0) {
        this.counter = 0;
      }
    }
  }

  increment() {
    this.__calculateStep(true);
  }

  decrement() {
    this.__calculateStep(false);
  }
}
