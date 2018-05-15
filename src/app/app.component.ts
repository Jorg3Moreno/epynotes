import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {MessagingService} from './messaging/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: any = {};

  // swUpdate to handle/notify when service worker need be updated
  constructor (private swUpdate: SwUpdate,
               private messagingService: MessagingService) {
    this.messagingService.getPermission();
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
  }

  ngOnInit(): void {
    // check if web browser supports service worker functionality
    if (this.swUpdate.isEnabled) {
      // available: to check and notify if is there is a new version available of sw
      this.swUpdate.available.subscribe(() => {
        window.location.reload();
      });
    }
  }
}
