import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/ingredient.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList:Product[]
  constructor(private productService:ProductService) { 
    this.productList = []
  }

  ngOnInit(): void {
    this.productList = this.productService.getProducts()
    this.productService.productChange.subscribe((product)=>{
      this.productList = product
    })
  }

  onDelete(product:Product){
    // console.log(product)
    this.productService.deleteProduct(product)
  }

}
