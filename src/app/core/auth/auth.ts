import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly cookieService = inject(CookieService);

  constructor() { }

  login(credentials: { username: string, password: string }) {
    this.http.post(`${environment.apiUrl}/auth/login`, credentials).pipe(
      // Handle the response and store the token in local storage
      tap((res: any) => {
        if (res) {
          this.cookieService.set('token', res.access_token);
        }
      }),
      catchError((error) => {
        // Handle error
        console.error('Login error:', error);
        return [];
      })
    ).subscribe((res: any) => {
      this.router.navigate(['/']);
    });
  }

  getUsers() {
    return this.http.get(`${environment.apiUrl}/users`).pipe(
      catchError((error) => {
        // Handle error
        console.error('Get users error:', error);
        return [];
      })
    );
  }

  getUserInfo(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/me`).pipe(
      catchError((error) => {
        // Handle error
        console.error('Get user info error:', error);
        return of();
      })
    );
  }
}

