import { Component, ElementRef, ViewChild } from '@angular/core';

import { BigScreenService } from 'angular-bigscreen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Bigscreen Demo';

  @ViewChild('logo') logoElement: ElementRef;

  constructor(private bigScreenService: BigScreenService) {
  }

  onClickButton(): void {
    // Request fullscreen
    this.bigScreenService.request(this.logoElement.nativeElement);
  }
}
