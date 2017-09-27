import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {

  private resourceUrl = 'api/user';

  constructor(private http: Http) { }

  create(user: any): any {
    return this.http.post(this.resourceUrl, user);
  }
}

