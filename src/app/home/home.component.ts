import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {StoreService} from '../entities/store/store.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    'home.css'
  ]

})
export class HomeComponent implements OnInit {

  store: any;
  isLogin: boolean;
  fbUser: any;
  currentPage: any;
  selectedStore: any;
  ngOnInit(): void {
    this.storeService.query({
      query: this.store
    }).subscribe((res) => {
      this.selectedStore = res.json();
      if (this.selectedStore.status === 0) {
        this.isLogin = false;
      } else {
        const storeInfo = this.selectedStore.store;
        this.fbUser = storeInfo.currentAccountInfo;
        if (storeInfo.currentPageInfo) {
          this.currentPage = storeInfo.currentPageInfo;
        }
        this.isLogin = true;
      }
    });
  }

  constructor(private storeService: StoreService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.store = params['store'];
    });
    this.currentPage = null;
  }
}
