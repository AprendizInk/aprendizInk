import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiUrl = 'http://localhost/aprendizInkApi/public/api';
  public isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient, private router:Router) { }

  public get isAuthenticated():Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }

  public login(email: string, password: string): Observable<{access_token: string}> {
    return this.http.post<{access_token: string}>(this.apiUrl + '/login', {email, password});
  }

  public authenticate(email: string, password: string): void {
    this.login(email, password).subscribe(
      response => {
        const token = response.access_token;
        localStorage.setItem('access_token', token);
        this.isAuthenticated$.next(true);
      },
      error => {
        console.error(error);
      }
    );
  } 

  logout(): void {
    localStorage.removeItem('access_token');
    this.isAuthenticated$.next(false);
  }

  public isAuthenticatedUser(): boolean {
    const token = localStorage.getItem('access_token');
    return token !== null;
  }

}
