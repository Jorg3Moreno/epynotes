import {Routes} from '@angular/router';
import {AuthComponent} from './auth.component';

export const authRoute: Routes = [
  {
    path: 'auth-login',
    component: AuthComponent
  }
];
