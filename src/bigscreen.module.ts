import { NgModule } from '@angular/core';

import { BigScreenService } from './bigscreen.service';

@NgModule({
	declarations: [
		BigScreenService
	],
	exports: [
		BigScreenService
	]
})
export class BigScreenModule {

}
