import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/ingredient.model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productName:string = ''
  quantity:number = 0

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addProduct(){
    const product = new Product(this.productName,this.quantity)
    
    console.log(product)

    this.productService.addProduct(product)
  }

}
