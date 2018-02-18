import { ModuleWithProviders, NgModule } from '@angular/core';

import { DocumentRef } from './document-ref';

import { BigScreenService } from './bigscreen.service';

@NgModule({
})
export class BigScreenModule {

	static forRoot(): ModuleWithProviders {
		return {
			ngModule: BigScreenModule,
			providers: [
				BigScreenService,
				DocumentRef
			],
		};
	}

	static forChild(): ModuleWithProviders {
		return {
			ngModule: BigScreenModule,
		};
	}

}
