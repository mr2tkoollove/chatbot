import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

  redirectUrl:string = 'api/redirect';

  constructor (private http: Http) {}
  redirect() {
    return this.http.get(this.redirectUrl);
  }

}
