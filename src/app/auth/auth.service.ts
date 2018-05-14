import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor(private ngFireDB: AngularFireDatabase,
              private ngFireAuth: AngularFireAuth) {
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
}
