import { ModuleWithProviders, NgModule } from '@angular/core';

import { BigScreenService } from './bigscreen.service';

@NgModule({
})
export class BigScreenModule {

	static forRoot(): ModuleWithProviders {
		return {
			ngModule: BigScreenModule,
			providers: [
				BigScreenService,
			],
		};
	}

	static forChild(): ModuleWithProviders {
		return {
			ngModule: BigScreenModule,
		};
	}

}
