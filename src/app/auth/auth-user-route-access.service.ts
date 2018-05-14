import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthUserRouteAccessService implements CanActivate {
  authState = false;

  canActivate() {
    return this.authState;
  }

  constructor(private authService: AuthService,
              private router: Router) {
    this.authService.isLogged()
      .subscribe((result) => {
        if (result && result.uid) {
          this.authState = true;
          this.router.navigate(['/notes']);
        } else {
          this.authState = false;
          this.router.navigate(['/auth-login']);
        }
      }, (error) => {
        this.authState = false;
        this.router.navigate(['/auth-login']);
      });
  }
}
