import {Injectable} from 'angular2/core';

@Injectable()
export class MyService {
  public hello: string = `Hello From MyService
    packaged as ng2-package-seed`;
}
