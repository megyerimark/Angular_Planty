import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserciveService } from '../authsercive.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private authService: AuthserciveService, private router: Router) {}

    canActivate() {
      if(this.authService.isLoggedIn()){
        return true;
      }
      this.router.navigate(['user/login']);
      return false;
  }

}
