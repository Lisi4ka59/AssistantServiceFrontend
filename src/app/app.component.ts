import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DemoComponent} from "./demo/demo.component";
import {RequestFormComponent} from "./request-form/request-form.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {TeamPageComponent} from "./team-page/team-page.component";
import {HeaderComponent} from "./header/header.component";
import {ScrollPanelModule} from "primeng/scrollpanel";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemoComponent, RequestFormComponent, MainPageComponent, TeamPageComponent, HeaderComponent, ScrollPanelModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AssistantServiceFrontend';
}
