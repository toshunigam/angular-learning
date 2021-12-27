import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingsService } from '../_services/shoppings.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingService:ShoppingsService) { }

  ngOnInit(): void {
    const ShoppingData = this.shoppingService.addShoppingList({name:'caret',amount:12})
    console.log(ShoppingData)
  }


  createdShoppingList(shoppingData:{name:string,amount:number}){
    this.ingredients.push(new Ingredient(shoppingData.name,shoppingData.amount))
  }

}
