import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistentMenuComponent } from './persistent-menu.component';

describe('PersistentMenuComponent', () => {
  let component: PersistentMenuComponent;
  let fixture: ComponentFixture<PersistentMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersistentMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersistentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
