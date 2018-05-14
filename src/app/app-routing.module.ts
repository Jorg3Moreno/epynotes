import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {authRoute} from './auth/auth.route';

const ROUTES = [
  ...authRoute
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
