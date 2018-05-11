import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  // swUpdate to handle/notify when service worker need be updated
  constructor (private swUpdate: SwUpdate) {
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
