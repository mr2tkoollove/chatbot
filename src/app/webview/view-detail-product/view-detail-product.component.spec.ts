import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailProductComponent } from './view-detail-product.component';

describe('ViewDetailProductComponent', () => {
  let component: ViewDetailProductComponent;
  let fixture: ComponentFixture<ViewDetailProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
