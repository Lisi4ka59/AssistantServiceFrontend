import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MailSenderService {
  constructor(private http: HttpClient) { }

  sendFormData(subject: any, message: any, sendTo: any) {
    let formData = {
      name: subject,
      email: sendTo,
      message: message
    }
    return this.http.post<any>('http://localhost:8080/send-email', formData);
  }
}
