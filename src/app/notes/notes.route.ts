import {Routes} from '@angular/router';
import {NotesComponent} from './notes.component';
import {AuthUserRouteAccessService} from '../auth/auth-user-route-access.service';

export const notesRoute: Routes = [
  {
    path: 'notes',
    component: NotesComponent,
    canActivate: [AuthUserRouteAccessService],
  },
  {
    path: '',
    component: NotesComponent,
    canActivate: [AuthUserRouteAccessService]
  }
];
