import { Component } from '@angular/core';
import { HelloWorld } from "../dist";
//import { HelloWorld } from "ng2-publish-seed";

@Component({
  selector: 'my-app',
  providers: [HelloWorld],
  template: `Here we say "{{helloWorld}}"`
})
export class AppComponent {
  constructor(public helloWorld: HelloWorld) {
  }
  
}
