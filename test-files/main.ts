//main entry point
import {bootstrap} from 'angular2/platform/browser';
import {MyPipe, MyService} from 'ng2-package-seed';
import {App} from './app';

bootstrap(App, [MyService]).catch(err => console.error(err));
