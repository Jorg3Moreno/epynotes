import {NgModule} from '@angular/core';
import {AuthComponent, AuthDialogComponent} from './auth.component';
import {AuthService} from './auth.service';
import {MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {authRoute} from './auth.route';
import {RouterModule} from '@angular/router';

const ROUTES = [
  ...authRoute
];

@NgModule({
  declarations: [
    AuthComponent,
    AuthDialogComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  entryComponents: [
    AuthComponent,
    AuthDialogComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
