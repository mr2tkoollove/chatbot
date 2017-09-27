import {Component, OnInit, Renderer2} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  isSidebarResponsiveCollapsed: boolean;
  store: any;
  constructor(private renderer: Renderer2, private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.isSidebarResponsiveCollapsed = true;
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.store = params['store'];
    });
  }

  ngOnInit() {
   }

  collapsedSidebarResponsive() {
    this.isSidebarResponsiveCollapsed = true;
    this.renderer.removeClass(document.getElementById('page-sidebar'), 'in');
  }
}
