import { Injectable } from '@angular/core';
import {BaseRequestOptions, Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class StoreService {
  private resourceUrl = '/api/store';
  private getCodeUrl = '/api/store/get-code';
  constructor(private http: Http) { }

  query(req?: any): Observable<Response> {
    const options = this.createRequestOption(req);
    return this.http.get(this.resourceUrl, options)
      .map((res: any) => this.convertResponse(res)
      );
  }

  getCode(req?: any): Observable<Response> {
    const options = this.createRequestOption(req);
    return this.http.get(this.getCodeUrl, options)
      .map((res: any) => this.convertResponse(res)
      );
  }

  private convertResponse(res: any): any {
    const jsonResponse = res.json();
    res._body = jsonResponse;
    return res;
  }

  private createRequestOption(req?: any): BaseRequestOptions {
    const options: BaseRequestOptions = new BaseRequestOptions();
    if (req) {
      const params: URLSearchParams = new URLSearchParams();
      params.set('page', req.page);
      params.set('size', req.size);
      if (req.sort) {
        params.paramsMap.set('sort', req.sort);
      }
      params.set('query', req.query);

      options.search = params;
    }
    return options;
  }
}
