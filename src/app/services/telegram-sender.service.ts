import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()

export class TelegramSenderService {
  private botToken:string = '*';
  private chatId:string = '*';
  private threadId:string = '41';
  constructor(private http: HttpClient) { }
  sendFrom(message: string) {
    const url:string = `https://api.telegram.org/bot${this.botToken}/sendMessage?chat_id=${this.chatId}&text=${message}&message_thread_id=${this.threadId}`;
    return this.http.get(url);
  }
}
