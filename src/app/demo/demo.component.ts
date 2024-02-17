import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  @ViewChild('sunMoon') sunMoon: ElementRef | undefined;
  @ViewChild('darkSwitch') darkSwitch: ElementRef | undefined;
  switchFlag:boolean = false;
  switch():void {
    if (!this.switchFlag) {
      this.darkSwitch?.nativeElement.classList.add('moveBackRight');
      this.darkSwitch?.nativeElement.classList.remove('moveBackLeft');
      this.sunMoon?.nativeElement.classList.add('moveRight');
      this.sunMoon?.nativeElement.classList.remove('moveLeft');
      this.switchFlag = true;
    } else {
      this.darkSwitch?.nativeElement.classList.add('moveBackLeft');
      this.darkSwitch?.nativeElement.classList.remove('moveBackRight');
      this.sunMoon?.nativeElement.classList.add('moveLeft');
      this.sunMoon?.nativeElement.classList.remove('moveRight');
      this.switchFlag = false;
    }
  }

}
