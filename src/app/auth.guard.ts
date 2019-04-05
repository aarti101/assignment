import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private _router : Router){}
  canActivate(): boolean{
    if(localStorage.getItem('email')!= null){
      return true;
    }else{
      this._router.navigate(['public/login']);
      return false;
    }
  }
  
}
