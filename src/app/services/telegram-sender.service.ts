import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()

export class TelegramSenderService {
  private botToken:string = '*';
  private chatId:string = '*';
  private threadId:string = '41';
  constructor(private http: HttpClient) { }
  sendForm(message: string) {
    //url для отправки get запросом
    //const url:string = "https://api.telegram.org/bot" + this.botToken + "/sendMessage?chat_id=" + this.chatId + "&text=" + message + "&message_thread_id=" + this.threadId;
    const url:string = "https://api.telegram.org/bot" + this.botToken + "/sendMessage";

    const data = {
      chat_id: this.chatId,
      text: message,
      message_thread_id: this.threadId
    };
    return this.http.post(url, data);
  }
}

