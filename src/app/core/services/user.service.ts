import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map, share, flatMap, catchError} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {User} from "../models/user";
import { speakers } from '../../../assets/datas/speakers';
import { partners } from '../../../assets/datas/partners';
import { cards } from '../../../assets/datas/cards';
import { hours } from '../../../assets/datas/hours';
import { organisers } from '../../../assets/datas/organisers';
import {Observable, of} from "rxjs";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  public findAllSpeakers() {
    return speakers.users;
  }

  public findAllTeams() {
    return organisers.organisers;
  }

  public findAllPartners() {
    return partners.partners;
  }

  public findAllCards() {
    return cards.cards;
  }

  public findAllHours() {
    return hours.hours;
  }

  public findAll() {
    return this.http.get<User[]>(`${environment.baseUrl}/users`).pipe(
      map(datas => datas.map(student => new User(student)))
    );
  }

  public findByName(name: string) {
    const user = new User({name});
    return this.http.post<User>(`${environment.baseUrl}/users/find/name`, user).pipe(
      map(data => {
        return new User(data);
      }),
      catchError(err => of(null))
    );
  }

  public create(user: any): Observable<HttpResponse<User>> {
    return this.http.post<any>(`${environment.baseUrl}/users`, user);
  }

  public update(user: User, id: number): Observable<boolean> {
    return this.http.put<User>(`${environment.baseUrl}/users/${id}`, user).pipe(
      map(res => true),
      catchError(err => {
        console.error(err);
        return of(false);
      })
    );
  }

  public delete(user: User): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.baseUrl}/users/${user.id}`).pipe(
      map(res => true),
      catchError(err => {
        console.error(err);
        return of(false);
      })
    );
  }

  public uploadPicture(file: string | Blob): Observable<any> {
    const formData = new FormData();
    formData.append('picture', file);
    return this.http.post(`${environment.baseUrl}/users/upload`, formData).pipe(
      map(data => {
        return data;
      }),
      catchError(err => {
        console.error(err);
        return of(null);
      })
    );
  }

  public confirmPicture(name: any, path: string): Observable<any> {
    console.log(name, path);
    return this.http.post<any>(`${environment.baseUrl}/users/confirm`, { name, logo: path }).pipe(
      catchError(err => {
        console.error(err);
        return of(null);
      })
    );
  }

  public cancelPicture(name: string): Observable<any> {
    const formData = new FormData();
    formData.append('name', name);
    return this.http.post<any>(`${environment.baseUrl}/users/cancel`, formData).pipe(
      catchError(err => {
        console.error(err);
        return of(null);
      })
    );
  }
}
