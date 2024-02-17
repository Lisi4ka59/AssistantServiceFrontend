import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DemoComponent} from "./demo/demo.component";
import {RequestFormComponent} from "./request-form/request-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemoComponent, RequestFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AssistantServiceFrontend';
}
