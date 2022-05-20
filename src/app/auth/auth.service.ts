import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap, throwError } from 'rxjs';
import { User } from './user.model';

const SIGN_UP_URL =
"https://drinkup-base-api.herokuapp.com/api/v1/users/create";
const SIGN_IN_URL =
"https://drinkup-base-api.herokuapp.com/api/v1/users/login";


export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;
  isLoggedIn = false;

  constructor(private http: HttpClient, private router: Router) {}

  signup(email: string, password: string) {
    return this.http
      .post<any>(SIGN_UP_URL, {
        email,
        password
      })
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(SIGN_IN_URL, {
        email,
        password,
      })
      .pipe(
        tap((res) => {
          const { expiry, value } = res.payload.token;
          const { email, id } = res.payload.user;

          const expiresIn = new Date(expiry).getTime() - Date.now();
          this.handleAuth(email, id, value, +expiresIn);
        })
      );
  }

  // const token = data.payload.access_token; //holds retrieved bearer token
  //       const headers = new HttpHeaders({
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${token}`, //implements bearer token into authorization header
  //       });

  // autoLogin() {
  //   const userData: {
  //     email: string;
  //     id: string;
  //     _token: string;
  //     _tokenExpirationDate: string;
  //   } = JSON.parse(localStorage.getItem('userData'));
  //   if (!userData) {
  //     return;
  //   }

  //   const loadedUser = new User(
  //     userData.email,
  //     userData.id,
  //     userData._token,
  //     new Date(userData._tokenExpirationDate)
  //   );

  //   if (loadedUser.token) {
  //     this.user.next(loadedUser);
  //     const expirationDuration =
  //       new Date(userData._tokenExpirationDate).getTime() -
  //       new Date().getTime();
  //   }
  // }

  logout() {
    this.http.delete('https://drinkup-base-api.herokuapp.com/api/v1/users/logout').subscribe((res: any) => {
      console.log("Logged Out", res);
      if(res.success) {
        this.user.next(null);
        localStorage.removeItem('userData');

        if(this.tokenExpirationTimer) clearTimeout(this.tokenExpirationTimer);
        this.router.navigate(['auth']);
      }
    })
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  handleAuth(email: string, userId: string, token: string, expiresIn: number) {
    // Create Expiration Date for Token
    const expDate = new Date(new Date().getTime() + expiresIn * 1000);

    // Create a new user based on the info passed in . . . and emit that user
    const formUser = new User(email, userId, token, expDate);
    this.user.next(formUser);

    // Set a new timer for expiration token

    // Save the new user to localStorage
    localStorage.setItem('userData', JSON.stringify(formUser));
  }


}
