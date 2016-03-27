import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

export interface IMy {
  foo: string;
  bar: any;
}

@Injectable()
export class MyService {
  constructor(private http: Http) {}

  public get(lang: string): any {
    return this.http.get(`http://my.url.com/path/to/data.json`)
      .map((res: Response) => res.json());
  }
}
