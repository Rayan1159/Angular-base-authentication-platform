import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  public isLoggedIn(): boolean {
    const authenticated = localStorage.getItem("authenticated")
    if (authenticated) {
      return true;
    }
    return false;
  }
}
