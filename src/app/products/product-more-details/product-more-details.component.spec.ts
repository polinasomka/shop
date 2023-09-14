import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMoreDetailsComponent } from './product-more-details.component';

describe('ProductMoreDetailsComponent', () => {
  let component: ProductMoreDetailsComponent;
  let fixture: ComponentFixture<ProductMoreDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductMoreDetailsComponent]
    });
    fixture = TestBed.createComponent(ProductMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
