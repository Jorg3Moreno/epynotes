import {Routes} from '@angular/router';
import {NotesComponent} from './notes.component';

export const notesRoute: Routes = [
  {
    path: 'notes',
    component: NotesComponent
  },
  {
    path: '',
    component: NotesComponent
  }
];
