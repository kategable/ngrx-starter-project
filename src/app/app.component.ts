import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { updateUserName } from './user.actions';
import { GlobalState } from './user.reducer';
import { selectName } from './user.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-first-ngrx-project';
  name$: Observable<string>;

  constructor(private store: Store<GlobalState>) {
    this.name$ = store.pipe(select('name'));
  }

  changeState(prop: string) {
    this.store.dispatch(updateUserName({ name: 'My Name is Kate Sky' }));
  }
}
