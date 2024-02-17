import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MailSenderService {
  constructor(private http: HttpClient) { }

  sendFormData(formData: any) {
    console.log(formData);
    return this.http.post<any>('http://localhost:8080/send-email', formData);
  }
}
