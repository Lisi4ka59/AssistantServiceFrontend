import { Component } from '@angular/core';
import {ScrollPanelModule} from "primeng/scrollpanel";

@Component({
  selector: 'app-team-page',
  standalone: true,
  imports: [
    ScrollPanelModule
  ],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.css'
})
export class TeamPageComponent {

}
