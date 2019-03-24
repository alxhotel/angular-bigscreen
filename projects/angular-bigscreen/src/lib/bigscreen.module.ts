import { NgModule } from '@angular/core';

import { DocumentRef } from './document-ref'

import { BigScreenService } from './bigscreen.service';

@NgModule({
	declarations: [
	],
	imports: [
	],
	providers: [
		DocumentRef,
		BigScreenService
	],
	exports: [
	]
})
export class BigScreenModule {
}
