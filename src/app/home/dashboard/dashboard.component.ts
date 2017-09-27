import {Component, Input, OnInit} from "@angular/core";
import {UserService} from "../../entities/user/user.service";
import {PageService} from "../../entities/page/page.service";
import {Page} from "../../entities/page/page";
import {PayLoadService} from "../../entities/payload/payload.service";
import {StoreService} from "../../entities/store/store.service";
import {MenuService} from "../../entities/menu/menu.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() public fbUser: any;
  @Input() public currentPage: any;
  @Input() public store: any;
  listPage: any;
  selectedPage: any;
  page: Page;
  listPayLoad: any;
  isLogout: boolean;

  startedButtonText: any;
  listButtonMainMenu: any;
  textMainMenu: any;
  listButtonPersistentMenu: any;
  listAdditionalPersistentMenu: any;

  mainMenu1: any;
  mainMenu2: any;
  mainMenu3: any;

  persistentMenu1: any;
  persistentMenu2: any;
  persistentMenu3: any;

  additionalPMenu1: any;
  additionalPMenu2: any;
  additionalPMenu3: any;
  additionalPMenu4: any;

  constructor(private userService: UserService,
              private pageService: PageService,
              private storeService: StoreService,
              private payloadService: PayLoadService,
              private menuService: MenuService) {
    this.isLogout = false;
    this.payloadService.query().subscribe(res => {
      this.listPayLoad = res.json();
    });
  }

  ngOnInit() {
    if (!this.currentPage) {
      this.setListPage();
    } else {
      this.pageService.findOne(this.currentPage.pageId).subscribe((res: Page) => {
        this.page = res;
        this.setValue();
      });
    }
  }

  setValue() {
    this.startedButtonText = this.page.getStartedButton;
    this.listButtonMainMenu = this.page.mainMenu.message.attachment.payload.buttons;
    this.textMainMenu = this.page.mainMenu.message.attachment.payload.text;
    this.listButtonPersistentMenu = this.page.persistentMenu.persistent_menu[0].call_to_actions;
    this.listAdditionalPersistentMenu = this.listButtonPersistentMenu[2].call_to_actions;

    this.mainMenu1 = this.listButtonMainMenu[0].payload;
    this.mainMenu2 = this.listButtonMainMenu[1].payload;
    this.mainMenu3 = this.listButtonMainMenu[2].payload;
    this.persistentMenu1 = this.listButtonPersistentMenu[0].payload;
    this.persistentMenu2 = this.listButtonPersistentMenu[1].payload;
    this.persistentMenu3 = this.listButtonPersistentMenu[2].call_to_actions;

    this.additionalPMenu1 = this.listAdditionalPersistentMenu[0].payload;
    this.additionalPMenu2 = this.listAdditionalPersistentMenu[1].payload;
    this.additionalPMenu3 = this.listAdditionalPersistentMenu[2].payload;
    this.additionalPMenu4 = this.listAdditionalPersistentMenu[3].payload;
  }

  setListPage() {
    this.userService.getUserInfo(
     {
      fbUserId: this.fbUser.id,
      store: this.store
    }).subscribe(res => {
      console.log(res);
      this.listPage = res.json();
    });
  }

  setPage() {
    this.pageService.create(
      {
        page: this.selectedPage,
        store: this.store
      }
    ).subscribe(res => {
      this.currentPage = res;
      this.pageService.findOne(this.currentPage.pageId).subscribe((res2: Page) => {
        this.page = res2;
        this.setValue();
      });
    });
  }

  getCode() {
    this.storeService.getCode({query: this.store.storeAlias}).subscribe(res => {
      window.parent.location.href = res.json().url;
    });
  }

  clearPage() {
    this.pageService.clearPage({
      page: this.page
    }).subscribe(() => {
      this.setListPage();
      this.currentPage = null;
      this.isLogout = true;
    });
  }

  setStartedText() {
    this.menuService.updateStartedText({
      startedText: this.startedButtonText,
      pageId: this.page.pageId
    }).subscribe(() => {
      console.log('success');
    });
  }
  setMainMenu() {
    this.listButtonMainMenu[0].payload = this.mainMenu1;
    this.listButtonMainMenu[0].title = this.setTitleFromPayLoad(this.mainMenu1);
    this.listButtonMainMenu[1].payload = this.mainMenu2;
    this.listButtonMainMenu[1].title = this.setTitleFromPayLoad(this.mainMenu2);
    this.listButtonMainMenu[2].payload = this.mainMenu3;
    this.listButtonMainMenu[2].title = this.setTitleFromPayLoad(this.mainMenu3);
    this.menuService.updateMainMenu({
      mainMenu: this.listButtonMainMenu,
      pageId: this.page.pageId,
      text: this.textMainMenu
    }).subscribe(() => {
      console.log('success');
    });
  }

  setPersistentMenu() {
    this.listButtonPersistentMenu[0].payload = this.persistentMenu1;
    this.listButtonPersistentMenu[0].title = this.setTitleFromPayLoad(this.persistentMenu1);
    this.listButtonPersistentMenu[1].payload = this.persistentMenu2;
    this.listButtonPersistentMenu[1].title = this.setTitleFromPayLoad(this.persistentMenu2);
    this.listButtonPersistentMenu[2].call_to_actions[0].payload = this.additionalPMenu1;
    this.listButtonPersistentMenu[2].call_to_actions[0].title = this.setTitleFromPayLoad(this.additionalPMenu1);
    this.listButtonPersistentMenu[2].call_to_actions[1].payload = this.additionalPMenu2;
    this.listButtonPersistentMenu[2].call_to_actions[1].title = this.setTitleFromPayLoad(this.additionalPMenu2);
    this.listButtonPersistentMenu[2].call_to_actions[2].payload = this.additionalPMenu3;
    this.listButtonPersistentMenu[2].call_to_actions[2].title = this.setTitleFromPayLoad(this.additionalPMenu3);
    this.listButtonPersistentMenu[2].call_to_actions[3].payload = this.additionalPMenu4;
    this.listButtonPersistentMenu[2].call_to_actions[3].title = this.setTitleFromPayLoad(this.additionalPMenu4);
    this.menuService.updatePersistentMenu({
      persistentMenu: this.listButtonPersistentMenu,
      pageAccessToken: this.page.pageAccessToken
    }).subscribe(() => {
      console.log('success');
    });
  }

  setTitleFromPayLoad(payload) {
    switch (payload) {
      case 'SEARCH_PRODUCT': return 'Tìm kiếm sản phẩm';
      case 'CHAT_WITH_STAFF': return 'Chat với nhân viên';
      case 'ADD_TO_CART': return 'Thêm sản phẩm vào giỏ hàng';
      case 'CONTACT_INFO': return 'Thông tin liên hệ';
      case 'STATUS_ORDER': return 'Trạng thái đơn hàng';
      case 'VIEW_CART': return 'Xem giỏ hàng';
      case 'OTHER': return 'Chức năng khác';
      case 'MAIN_MENU': return 'Main menu';
      case 'VIEW_ALL_COLLECTIONS': return 'Danh mục sản phẩm';
      default: return null;
    }
  }
}
