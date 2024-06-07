import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:4200/.netlify/functions/server/';

  constructor(private http: HttpClient) { }

  getMessage(): Observable<any> {
    return this.http.get(this.apiUrl+"api",{responseType: 'json'});
  }
}
