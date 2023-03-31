import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Adminauthsercive } from './Service/adminauthsercive.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceGuard implements CanActivate {


  constructor( private admin:Adminauthsercive , private router: Router){
  }
 canActivate() {
  if(this.admin.isLoggedIn()){
    return true;
  }
  this.router.navigate(['admin/login']);
  return false;

 }
}

