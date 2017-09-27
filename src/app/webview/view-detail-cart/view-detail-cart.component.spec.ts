import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailCartComponent } from './view-detail-cart.component';

describe('ViewDetailCartComponent', () => {
  let component: ViewDetailCartComponent;
  let fixture: ComponentFixture<ViewDetailCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
