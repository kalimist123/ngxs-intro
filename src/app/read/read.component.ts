
import { Store, Select } from '@ngxs/store';
import { Tutorial } from '../models/tutorial.model';
import { TutorialState } from '../state/tutorial.state'; // We will use this shortly
import { Observable } from 'rxjs';
import { RemoveTutorial } from '../actions/tutorial.actions';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {


  @Select(TutorialState.getTutorials) tutorials$: Observable<Tutorial>;

  constructor(private store: Store) {
  }

  delTutorial(name): void {
    this.store.dispatch(new RemoveTutorial(name));
  }
  ngOnInit(): void {
  }

}
