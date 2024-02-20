import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {TelegramSenderService} from "../services/telegram-sender.service";
import {HttpClientModule} from "@angular/common/http";
import {MailSenderService} from "../services/mail-sender.service";
import {InputMaskModule} from "primeng/inputmask";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {SliderModule} from "primeng/slider";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {InputGroupModule} from "primeng/inputgroup";
import {CheckboxModule} from "primeng/checkbox";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-request-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputMaskModule,
    NgIf,
    RadioButtonModule,
    NgForOf,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    NgClass,
    SliderModule,
    InputGroupAddonModule,
    InputGroupModule,
    CheckboxModule,
    CardModule
  ],
  templateUrl: './request-form.component.html',
  styleUrl: './request-form.component.css',
  providers: [TelegramSenderService, MailSenderService]
})
export class RequestFormComponent {
  textForm: FormGroup;
  phoneNumber: string = "";
  message: string | undefined;
  sendTo:string = "assistantpro.service@mail.ru";
  //sendTo:string = "0059nai@gmail.com";
  subject:string = "";


  constructor(private formBuilder: FormBuilder, private telegramSenderService: TelegramSenderService, private mailSenderService: MailSenderService) {
    this.textForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-Я ]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[+]\d\s\(\d{3}\)\s\d{3}-\d{4}$/)]],
      personal: ['', [Validators.required]],
      callMethodPhone: [''],
      callMethodEmail: [''],
      callMethodTelegram: [''],
      callMethodWhatsApp: [''],
      callMethodViber: [''],
      assistantTypePersonal: [''],
      assistantTypeHybrid: [''],
      assistantTypeBusiness: ['']
    });
  }


  onSubmit(): void {
    let assistantTypeMessage = ((this.textForm.value.assistantTypePersonal == "" ? "" : this.textForm.value.assistantTypePersonal + "  ") + (this.textForm.value.assistantTypeHybrid == "" ? "" : this.textForm.value.assistantTypeHybrid + "  ") + this.textForm.value.assistantTypeBusiness).trim().replaceAll("  ", ", ");
    let wayToCallMessage = ((this.textForm.value.callMethodPhone == "" ? "" : this.textForm.value.callMethodPhone + "  ") + (this.textForm.value.callMethodEmail == "" ? "" : this.textForm.value.callMethodEmail + "  ") + (this.textForm.value.callMethodTelegram == "" ? "" : this.textForm.value.callMethodTelegram + "  ") + (this.textForm.value.callMethodWhatsApp == "" ? "" : this.textForm.value.callMethodWhatsApp + "  ") + this.textForm.value.callMethodViber).trim().replaceAll("  ", ", ");
    if (wayToCallMessage == "") {
      wayToCallMessage = "Клиент не выбрал предпочтительный способ обратной связи";
    } else {
      wayToCallMessage = "Клиент предпочитает " + wayToCallMessage + " для обратной связи";
    }
    if (assistantTypeMessage == "") {
      assistantTypeMessage = "Клиент не выбрал тип ассистента";
    } else {
      assistantTypeMessage = "Нужен " + assistantTypeMessage + " ассистент";
    }
    this.message = "Имя клиента: " + this.textForm.value.name + "\nПочта для связи: " + this.textForm.value.email + "\nТелефон для связи: " + this.textForm.value.phoneNumber.replaceAll(" ", "") + "\n" + assistantTypeMessage + "\n" + wayToCallMessage;
    this.telegramSenderService.sendForm(this.message).subscribe(response => {
     //console.log('Message sent to Telegram');
    });
    this.subject = "Клиент " + this.textForm.value.name + ". " + assistantTypeMessage;
    this.mailSenderService.sendFormData(this.subject, this.message, this.sendTo).subscribe(response => {
      //console.log('Mail sent to Email');
    });
  }
}
