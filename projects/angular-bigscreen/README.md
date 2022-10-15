# angular-bigscreen

[![NPM][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Dependency Status][dependency-status-image]][dependency-status-url]
[![Angular style guide][codestyle-image]][codestyle-url]

**AngularBigScreen** is an Angular service to quickly use the HTML5 fullscreen API.

### Install

1. Install `angular-bigscreen` node module through npm:

	```sh
	npm install angular-bigscreen
	```

2. Import `BigScreenModule` to your AppModule

	```js
	import { BigScreenModule } from 'angular-bigscreen';
	
	@NgModule({
	  imports: [
	    BigScreenModule
	  ]
	})
	export class AppModule {	
	}
	```

3. Import `BigScreenService` and use it in a component

	```js
	import { BigScreenService } from 'angular-bigscreen';
	
	@Component({
	  selector: 'app-root',
	})
	export class AppComponent {
	  constructor(private bigScreenService: BigScreenService) {
	  }
	}
	```

### Usage

For example:

  ```js
  // Request fullscreen
  this.bigScreenService.request(this.elementRef.nativeElement);
  ```

### API

#### `this.bigScreenService.isFullscreen()`

Returns a `boolean`. True if fullscreen is being used, else false. 

#### `this.bigScreenService.isEnabled()`

Returns a `boolean`. Checks if fullscreen is enabled.

#### `this.bigScreenService.request(el: ElementRef)`

Requests fullscreen on an `ElementRef`.

#### `this.bigScreenService.exit()`

Exits from fullscreen.

#### `this.bigScreenService.onChange(callback: any)`

This is a wrapper for `document.fullscreenchange`.

#### `this.bigScreenService.onError(callback: any)`

This is a wrapper for `document.fullscreenerror`.

#### `this.bigScreenService.getElement()`

Returns an element. This is a wrapper for `document.fullscreenElement`.

## License

MIT. Copyright (c) [Alex](https://github.com/alxhotel).

[npm-image]: https://img.shields.io/npm/v/angular-bigscreen.svg
[npm-url]: https://npmjs.org/package/angular-bigscreen
[build-image]: https://img.shields.io/github/workflow/status/alxhotel/angular-bigscreen/ci/master
[build-url]: https://github.com/alxhotel/angular-bigscreen/actions
[dependency-status-image]: https://img.shields.io/librariesio/release/npm/angular-bigscreen
[dependency-status-url]: https://libraries.io/npm/angular-bigscreen
[codestyle-image]: https://img.shields.io/badge/code_style-codelyzer-brightgreen.svg
[codestyle-url]: https://github.com/mgechev/codelyzer



