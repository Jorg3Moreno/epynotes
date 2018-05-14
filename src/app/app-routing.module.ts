import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {authRoute} from './auth/auth.route';
import {notesRoute} from './notes/notes.route';

const ROUTES = [
  ...authRoute,
  ...notesRoute
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
