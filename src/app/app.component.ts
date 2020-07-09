import { Component } from '@angular/core'; 
import { Store, select } from '@ngrx/store';
import { updateUserName } from './user.actions';
import { GlobalState } from './root.reducer';
import { selectName, selectLoaded } from './user.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-first-ngrx-project';

  constructor(private readonly store: Store<GlobalState>) {}
  user$ = this.store.pipe(select(selectName));
  loaded$ = this.store.pipe(select(selectLoaded));

  changeState(prop: string) {
    this.store.dispatch(updateUserName({ user: {name :  'new name' }}));
  }
}
