import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import 'rxjs/add/operator/take';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MessagingService {

  messaging = firebase.messaging();
  currentMessage = new BehaviorSubject(null);

  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth) {
  }

  // Each user has a temporal token (not for loggin) in order
  // to know which device is using the user to send the notification
  updateToken(token) {
    this.afAuth.authState.take(1).subscribe(user => {
      if (!user) {
        return;
      }
      const data = { [user.uid]: token };
      this.db.object('fcmTokens/').update(data);
    });
  }

  // To show to an user a window popup in the web browser,
  // asking for permission to send notifications
  getPermission() {
    this.messaging.requestPermission()
      .then(() => {
        console.log('Notification permission granted.');
        return this.messaging.getToken();
      })
      .then(token => {
        console.log(token);
        this.updateToken(token);
      })
      .catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
  }

  // To receive an message when the app or site is open or not
  receiveMessage() {
    this.messaging.onMessage((payload) => {
      console.log('Message received.', payload);
      this.currentMessage.next(payload);
    });
  }
}
