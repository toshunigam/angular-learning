import { EventEmitter, Injectable } from "@angular/core"
import { Product } from "../shared/ingredient.model"

@Injectable()
export class ProductService{
    productChange = new EventEmitter<Product[]>()
    private products:Product[] = [
        new Product('Apple',3),
        new Product('OnePlus', 5)
    ]

    addProduct(product:Product){
        this.products.push(product)
        this.productChange.emit(this.products.slice())
    }

    getProducts(){
        return this.products.slice()
    }
}