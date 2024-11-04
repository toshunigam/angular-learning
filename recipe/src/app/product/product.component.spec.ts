import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from './product.component';
import { ProductService } from '../_services/product.service';
import { of } from 'rxjs';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let productService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      providers: [ ProductService ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getProducts on init', () => {
    spyOn(component, 'getProducts').and.callThrough();
    component.ngOnInit();
    expect(component.getProducts).toHaveBeenCalled();
  });

  it('should fetch products from the service', () => {
    // Use the correct structure for mockProducts
    const mockProducts = [{ quantity: 1, name: 'Product 1' }, { quantity: 2, name: 'Product 2' }];
    // spyOn(productService, 'getProducts').and.returnValue(of(mockProducts));

    component.getProducts();
    
    expect(component.products).toEqual(mockProducts);
    expect(productService.getProducts).toHaveBeenCalled();
  });
});