import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private serverUrl = 'https://contact-mailer.onrender.com';

  constructor(private http: HttpClient) { }

  sendContactForm(data: any) {
    return this.http.post(`${this.serverUrl}/send-email/`, data,{ responseType: 'text' })
      
  }
}
