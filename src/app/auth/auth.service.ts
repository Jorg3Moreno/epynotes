import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor(private ngFireAuth: AngularFireAuth) {
    this.isLogged();
  }

  registerUser(user: string, pass: string) {
    return this.ngFireAuth.auth.createUserWithEmailAndPassword(user, pass);
  }

  loginWithFacebook() {
    return this.ngFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  loginWithEmail(user: string, pass: string) {
    return this.ngFireAuth.auth.signInWithEmailAndPassword(user, pass);
  }

  logout() {
    return this.ngFireAuth.auth.signOut();
  }

  isLogged() {
    return this.ngFireAuth.authState;
  }
}
