import {Component} from '@angular/core';
import {ScrollPanelModule} from "primeng/scrollpanel";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {NgOptimizedImage} from "@angular/common";
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";

@Component({
  selector: 'app-team-page',
  standalone: true,
  imports: [
    ScrollPanelModule,
    CardModule,
    ButtonModule,
    NgOptimizedImage,
    CarouselModule,
    TagModule
  ],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.css'
})
export class TeamPageComponent {
  items: CarouselItems[] = [
    {
      id: 1,
      name: 'Дмитрий Матвеев',
      info: 'Lorem ipsum dolor sit amet, consectetur',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      telegram: '@SloggerD',
      telegramLink: 'https://t.me/SloggerD',
      phone: '+7 (922) 366-51-38',
      phoneLink: 'tel:+79223665138',
      image: 'assets/team_icon.png'
    },
    {
      id: 2,
      name: 'Димон',
      info: 'Lorem ipsum dolor sit amet, consectetur',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      phone: '+7 (922) 366-51-38',
      phoneLink: 'tel:+79223665138',
      image: 'assets/team_icon.png'
    },
    {
      id: 3,
      name: 'Дмитрий',
      info: 'Lorem ipsum dolor sit amet, consectetur',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      telegram: '@SloggerD',
      telegramLink: 'https://t.me/SloggerD',
      image: 'assets/team_icon.png'
    },
    {
      id: 4,
      name: 'Димочка',
      info: 'Lorem ipsum dolor sit amet, consectetur',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      telegram: '@SloggerD',
      telegramLink: 'https://t.me/SloggerD',
      phone: '+7 (922) 366-51-38',
      phoneLink: 'tel:+79223665138',
      image: 'assets/team_icon.png'
    }
  ];
}
export interface CarouselItems {
  id?: number;
  name?: string;
  info?: string;
  description?: string;
  telegram?: string;
  telegramLink?: string;
  phone?: string;
  phoneLink?: string;
  image?: string;
}


