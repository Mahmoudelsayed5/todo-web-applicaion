import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthentication {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  authenticate(username: string, password: string) {
    if (isPlatformBrowser(this.platformId)) {
      if (username === 'in28minutes' && password === 'dummy') {
        sessionStorage.setItem('authenticatedUser', username);
        return true;
      }
    }
    return false;
  }

  isUserLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return sessionStorage.getItem('authenticatedUser') !== null;
    }
    return false; // server-side default
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem('authenticatedUser');
    }
  }
}
