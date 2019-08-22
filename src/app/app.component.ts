import { Component, ElementRef, ViewChild } from '@angular/core';

import { BigScreenService } from 'angular-bigscreen';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent {
	title = 'angular-bigscreen-app';

	@ViewChild('logo', {static: false}) logoElement: ElementRef;

	constructor(private bigScreenService: BigScreenService) {
	}

	onClickButton() {
		// Request fullscreen
		this.bigScreenService.request(this.logoElement.nativeElement);
	}

}
