import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNavComponent } from './product-nav.component';

describe('ProductNavComponent', () => {
  let component: ProductNavComponent;
  let fixture: ComponentFixture<ProductNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
