import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenGuardGuard implements CanActivate {

  constructor(private router: Router) { } 

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
      const token = localStorage.getItem('token');      
      if(token === null || token === undefined || token === ''){
        console.log('calling my guard ......' + token);
        return this.router.parseUrl('/login');
      } else {
        console.log('calling my guard ......No');
        return true;
      }
  }
  
}
