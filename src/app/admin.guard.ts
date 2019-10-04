import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class adminGuard implements CanActivate {

  constructor(private router: Router) { } 
  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
    const token = localStorage.getItem('token');      
    if(token == 'c9f81d1c77bd8a585284cde023753870'){ 
      return this.router.parseUrl('/administrateur');
    } else {
      return this.router.parseUrl('');
    }
}
}
