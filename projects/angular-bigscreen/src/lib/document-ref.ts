import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DocumentRef {

	/**
	 * Access the native document.
	 */
	public get nativeDocument(): Document {
		return document;
	}

}
