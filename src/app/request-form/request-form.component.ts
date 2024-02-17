import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {TelegramSenderService} from "../services/telegram-sender.service";
import {HttpClientModule} from "@angular/common/http";
import {MailSenderService} from "../services/mail-sender.service";

@Component({
  selector: 'app-request-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './request-form.component.html',
  styleUrl: './request-form.component.css',
  providers: [TelegramSenderService, MailSenderService]
})
export class RequestFormComponent {
  textForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private telegramSenderService: TelegramSenderService, private mailSenderService: MailSenderService) {
    this.textForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    const message = `Первое поле: ${this.textForm.value.firstField}, Второе поле: ${this.textForm.value.secondField}`;
    this.telegramSenderService.sendFrom(message).subscribe(response => {
      console.log('Message sent to Telegram');
      // Дополнительная логика обработки ответа
    });
    this.mailSenderService.sendFormData(this.textForm.value).subscribe(response => {
      console.log('Form data sent successfully', response);
    });
  }


}
