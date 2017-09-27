import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {StoreService} from "./entities/store/store.service";

declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  isLogin: boolean;
  store: any;

  constructor(private storeService: StoreService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.store = params['store'];
      if (this.store) {
        this.storeService.query({
          query: this.store
        }).subscribe((res) => {
          this.store = res.json();
          if (this.store.status === 0) {
            this.isLogin = false;
          } else {
            this.isLogin = true;
          }
        });
      }
    });
  }

  ngOnInit() {

  }
}
