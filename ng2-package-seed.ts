import {provide} from 'angular2/core';
import {Http} from 'angular2/http';

import {MyPipe} from './src/seed-examples/my.pipe';
import {IMy, MyService} from './src/seed-examples/my.service';

export * from './src/seed-examples/my.pipe';
export * from './src/seed-examples/my.service';

export const MY_PROVIDERS: any = [
  MyPipe,
  MyService
];
