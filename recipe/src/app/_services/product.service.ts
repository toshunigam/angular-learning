import { Injectable } from "@angular/core"
import { Product } from "../shared/ingredient.model"

@Injectable()
export class ProductService{
    // public productname:string

    private products:Product[] = [
        new Product('Apple',3),
        new Product('OnePlus', 5)
    ]

    constructor(){
        
    }

    addProduct(product:Product){
        this.products.push(product)
    }

    getProducts(){
        return this.products.slice()
    }
}