import {AuthModel} from './auth.model';
import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  authUser: AuthModel;
  constructor(private authService: AuthService, private matDialog: MatDialog) {
    this.authUser = new AuthModel();
  }

  public login() {
    this.authService.loginWithEmail(this.authUser.user, this.authUser.pass);
  }

  public openRegisterUser() {
    this.matDialog.open(AuthDialogComponent);
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './auth-dialog.component.html',
})
export class AuthDialogComponent {
  authUser: AuthModel;

  constructor(private authService: AuthService) {
    this.authUser = new AuthModel();
  }

  public registerUser() {
    // TODO: use promise to show popup messages onSucces and onError
    this.authService.registerUser(this.authUser.user, this.authUser.pass);
  }
}
