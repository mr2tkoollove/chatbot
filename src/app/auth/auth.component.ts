import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, NavigationEnd, RoutesRecognized, Event } from '@angular/router';

import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Http } from "@angular/http";
import { AuthService } from './auth.service';

declare var window: any;
declare var FB: any;

@Component({
    selector: 'auth',
    template: '',
})
export class AuthComponent implements OnInit {

    private currentRoute: string;

    title = 'app';
    isLogin: boolean;

    constructor(
        private router: Router,
        private http: Http,
    private authService: AuthService) {

    }

    ngOnInit() {
    }

}
