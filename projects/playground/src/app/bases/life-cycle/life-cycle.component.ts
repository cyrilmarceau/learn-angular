import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
})
export class LifeCycleComponent implements OnInit, OnChanges, OnDestroy {
  ngOnInit(): void {
    console.log('app-life-cycle -> ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('app-life-cycle -> ngOnChanges', changes);
  }

  ngOnDestroy(): void {
    console.log('app-life-cycle -> ngOnDestroy');
  }

  ngDoCheck(): void {
    console.log('app-life-cycle -> ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('app-life-cycle -> ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('app-life-cycle -> ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('app-life-cycle -> ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('app-life-cycle -> ngAfterViewChecked');
  }
}
