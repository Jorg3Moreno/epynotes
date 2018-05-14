import {AuthModel} from './auth.model';
import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  authUser: AuthModel;
  constructor(private authService: AuthService,
              private matDialog: MatDialog,
              private matSnackBar: MatSnackBar,
              private router: Router) {
    this.authUser = new AuthModel();
  }

  // TODO: improve method, many duplicated code
  public login() {
    this.authService.loginWithEmail(this.authUser.user, this.authUser.pass)
      .then(() => {
        this.router.navigate(['/notes']);
        this.matSnackBar.open('Login successful', 'OK', {
          duration: 2000,
        });
      })
      .catch(() => {
        this.matSnackBar.open('An error has occurred', 'ERROR', {
          duration: 2000,
        });
      });
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

  constructor(private authService: AuthService,
              private matSnackBar: MatSnackBar) {
    this.authUser = new AuthModel();
  }

  // TODO: improve method, many duplicated code
  public registerUser() {
    this.authService.registerUser(this.authUser.user, this.authUser.pass)
      .then(() => {
        this.matSnackBar.open('You has been registered', 'OK', {
          duration: 2000,
        });
      })
      .catch(() => {
        this.matSnackBar.open('An error has occurred', 'ERROR', {
          duration: 2000,
        });
      });
  }
}
