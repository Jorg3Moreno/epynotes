import {Component} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  authState = false;

  constructor(private authService: AuthService) {
    this.isLogged();
  }

  logout() {
    this.authService.logout();
  }

  isLogged() {
    this.authService.isLogged()
      .subscribe((result) => {
        if (result && result.uid) {
          this.authState = true;
        } else {
          this.authState = false;
        }
      }, (error) => {
        this.authState = false;
      });
  }
}
