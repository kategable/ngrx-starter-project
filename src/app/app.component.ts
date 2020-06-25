import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { updateUserName } from './user.actions';
import { GlobalState } from './root.reducer';
import { selectName, selectLoading } from './user.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-first-ngrx-project'; 

  constructor(private readonly store: Store<GlobalState>) {
		this.store.pipe(select(selectName)).subscribe((items) => {
			console.log(items)
	});
			this.store.pipe(select(selectLoading)).subscribe((items) => {
			console.log(items)
	});
	}

	 

  changeState(prop: string) {
    this.store.dispatch(updateUserName({ name: 'My Name is Kate Sky' }));
  }
}
