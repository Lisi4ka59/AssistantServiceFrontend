import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    ButtonModule
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css', './main-page.style.scss']
})
export class MainPageComponent {

}
