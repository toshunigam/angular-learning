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
    // Declare a new array
    let newArray = [];
 
    // Declare an empty object
    let uniqueObject:any = {};

    // Loop for the array elements
    for (let i in this.ingredients) {

        // Extract the title
        let objTitle = this.ingredients[i]['name'];

        // Use the title as the index
        uniqueObject[objTitle] = this.ingredients[i];
    }

    // Loop to push unique object into array
    for (let i in uniqueObject) {
      newArray.push(uniqueObject[i]);
    }
    this.ingredients = newArray
  }

  deleteShopping(ingredient:Ingredient){
    console.log('delete item',ingredient)
    // return this.ingredients.filter((item:Ingredient)=> item.name !== ingredient.name)
    this.ingredients = this.ingredients.filter((item:Ingredient)=> item.name !== ingredient.name)
    // console.log(res)
    // this.ingredients = res
  }

}
