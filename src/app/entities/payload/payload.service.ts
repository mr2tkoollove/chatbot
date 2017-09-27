import { Injectable } from '@angular/core';
import {BaseRequestOptions, Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class PayLoadService {
  private resourceUrl = '/api/payload';
  private clearPageUrl = '/api/page/clearCurrentPage';
  constructor(private http: Http) { }

  query(req?: any): Observable<Response> {
    const options = this.createRequestOption(req);
    return this.http.get(this.resourceUrl, options)
      .map((res: any) => this.convertResponse(res)
      );
  }

  findOne(id: any): Observable<any> {
    return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
      const jsonResponse = res.json();
      return jsonResponse;
    });
  }

  create(page: any): Observable<Response> {
    return this.http.post(this.resourceUrl, page).map((res: Response) => {
      return res.json();
    });
  }

  clearPage(page: any): Observable<Response> {
    return this.http.post(this.clearPageUrl, page).map((res: Response) => {
      return res.json();
    });
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
