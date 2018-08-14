import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCheckOutComponent } from './cart-check-out.component';

describe('CartCheckOutComponent', () => {
  let component: CartCheckOutComponent;
  let fixture: ComponentFixture<CartCheckOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartCheckOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCheckOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
