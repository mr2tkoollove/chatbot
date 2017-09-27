import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class MenuService {
  private startedTextUrl = '/api/menu/setStartedText';

  private mainMenuUrl = '/api/menu/setMainMenu';
  private persistentMenuUrl = '/api/menu/setPersistentMenu';

  constructor(private http: Http) {
  }

  updateStartedText(text: any): Observable<Response> {
    return this.http.post(this.startedTextUrl, text).map((res: Response) => {
      return res.json();
    });
  }

  updateMainMenu(mainMenu: any): Observable<Response> {
    return this.http.post(this.mainMenuUrl, mainMenu).map((res: Response) => {
      return res.json();
    });
  }

  updatePersistentMenu(persistentMenu: any): Observable<Response> {
    return this.http.post(this.persistentMenuUrl, persistentMenu).map((res: Response) => {
      return res.json();
    });
  }
}
