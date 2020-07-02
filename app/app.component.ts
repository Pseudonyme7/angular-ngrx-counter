import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset } from './store/actions/counter';

@Component({
  selector: 'my-app',
  template: `
  <div>Current Count: {{ count$ | async }}</div>
  <button (click)="increment()">+</button>
  <button (click)="decrement()">-</button>
  <button (click)="reset()">Reset Counter</button>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
   this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }

}
