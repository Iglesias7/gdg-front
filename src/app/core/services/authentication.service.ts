import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, share, flatMap, catchError} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {User} from "../models/user";
import {of} from "rxjs";
import {TranslateService} from "@ngx-translate/core";

@Injectable()
export class AuthenticationService {

  public currentUser: User | null ;

  constructor(private http: HttpClient, private translator: TranslateService) {
    const data = JSON.parse(sessionStorage.getItem('currentUser') || '{}');
    this.currentUser = data.id != undefined ? new User(data) : null;
  }

  authenticate(email: string, password: string): any {

    return this.http.post<any>(`${environment.baseUrl}/auth`, {
      email,
      password
    }).pipe(
      map(users => {
        const user = new User(users);
        console.log("user")
        this.login(user);
        return user;
      })
    ).pipe(share());
  }

  storeToken(user: User): void {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUser = user;
  }

  hasToken() {
    if(this.currentUser) {
      return true;
    }
    return false;
  }

  getToken() : any {
    if (this.hasToken()) {
      // @ts-ignore
      return this.currentUser.token;
    }
    return false;
  }

  login(user: User): void {
    console.log("2")
    if (user.token) {
      console.log(user.token)
      this.storeToken(user);
    }
  }

  public findByEmail(email: string) {
    const user = new User({email});
    return this.http.post<User>(`${environment.baseUrl}/users/find/email`, user).pipe(
      map(data => {
        return new User(data);
      }),
      catchError(err => of(null))
    );
  }

  public findByEmailAndPassword(email: string, password:string) {
    const user = new User({email, password});
    return this.http.post<User>(`${environment.baseUrl}/users/find/password`, user).pipe(
      map(data => {
        return new User(data);
      }),
      catchError(err => of(null))
    );
  }

  public create(user: any) {
    const data = {
      username: user.username,
      firstname: user.firstname,
      email: user.email,
      password: user.password
    };
    return this.http.post(`${environment.baseUrl}/users`, data, {headers: {'Content-Type': 'application/json'}}).pipe(
      flatMap(res => this.authenticate(user.email, user.password))
    );
  }

  logout() {
    sessionStorage.removeItem('currentUser');
    this.currentUser = null;
  }
}
