import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public apiUrl = environment.apiUrl;
  public isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  public get isAuthenticated(): Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }

  public login(email: string, password: string): Observable<{access_token: string}> {
    const body = {
      email: email, 
      password: password
    };
    return this.http.post<{access_token: string}>(this.apiUrl + '/login', body);
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
    const token =localStorage.getItem('access_token');
    return token !==null;
  }
}
