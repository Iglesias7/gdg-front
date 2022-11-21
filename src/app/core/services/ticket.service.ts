import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {Observable, of} from "rxjs";
import {Ticket} from "../models/ticket";

@Injectable()
export class TicketService {

  constructor(private http: HttpClient) {}

  public findAll() {
    return this.http.get<Ticket[]>(`${environment.baseUrl}/tickets`).pipe(
      map(datas => datas.map(ticket => new Ticket(ticket)))
    );
  }

  public create(ticket: any): Observable<HttpResponse<Ticket>> {
    return this.http.post<any>(`${environment.baseUrl}/tickets`, ticket);
  }

  public delete(ticket: Ticket): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.baseUrl}/tickets/${ticket.id}`).pipe(
      map(res => true),
      catchError(err => {
        console.error(err);
        return of(false);
      })
    );
  }
}
