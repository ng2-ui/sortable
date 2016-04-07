//our root app component
import {Component} from 'angular2/core';
import {MyPipe} from 'ng2-package-seed';

@Component({
  selector: 'my-app',
  template: `<div><h2>Hello {{ 'Angular2' | my }}</h2></div>`,
  pipes: [MyPipe],
  directives: []
})
export class App {
  constructor() {}
}
