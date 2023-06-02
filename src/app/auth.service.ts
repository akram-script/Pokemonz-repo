import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 isLoggedIn : boolean = false ;
 redirectUrl : string ; 

 login(name : string , pass : string ): Observable<boolean>{
  const isLoggedIn = (name == 'admin' && pass == 'admin') ;
  return of(isLoggedIn).pipe(
    delay(1000) ,
    tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
  ) ; 

 }

 logout(){
    this.isLoggedIn = false ; 
 }

}
