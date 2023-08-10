import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnDestroy {
  @Input('initial-value') counter = 0;
  @Input('step') step = 1;
  automaticIncrement: boolean = false;
  private intervalId: any;

  constructor() {}

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

  toggleAutomaticIncrement() {
    this.automaticIncrement = !this.automaticIncrement;

    if (this.automaticIncrement) {
      this.intervalId = setInterval(() => {
        this.__calculateStep(true);
      }, 1000);
    } else {
      clearInterval(this.intervalId);
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
