import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {StoreService} from '../../entities/store/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  store: any;

  constructor(private activatedRoute: ActivatedRoute, private storeService: StoreService) {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.store = params['store'];
    });
  }

  ngOnInit() {
  }

  getCode() {
    this.storeService.getCode({query: this.store}).subscribe(res => {
       window.parent.location.href = res.json().url;
    });
  }

}
