import {Pipe} from 'angular2/core';

@Pipe({name: 'my'})
export class MyPipe {
  transform(v: string, args: any[]) {
    return 'My ' + v;
  }
}
