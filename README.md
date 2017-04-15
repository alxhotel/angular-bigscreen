# angular-bigscreen
[![NPM][npm-image]][npm-url]
[![Travis][travis-image]][travis-url]
[![Dependency Status][dependency-status-image]][dependency-status-url]

**AngularBigScreen** is an Angular service to quickly use the HTML5 fullscreen API.

### Install

1. Install `angular-bigscreen` node module through npm:

	```bash
	$ npm install angular-bigscreen --save
	```

2. Import `BigScreenService` to your AppModule

	```js
	import { BigScreenService } from 'angular-bigscreen';
	
	@NgModule({
	  providers: [ BigScreenService ]
	})
	export class AppModule {
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
[travis-image]: https://img.shields.io/travis/alxhotel/angular-bigscreen/master.svg
[travis-url]: https://travis-ci.org/alxhotel/angular-bigscreen
[dependency-status-image]: https://david-dm.org/alxhotel/angular-bigscreen.svg
[dependency-status-url]: https://david-dm.org/alxhotel/angular-bigscreen
