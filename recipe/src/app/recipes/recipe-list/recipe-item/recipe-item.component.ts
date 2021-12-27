import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingsService } from 'src/app/_services/shoppings.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>()

  constructor(private shoppingService:ShoppingsService) {
    this.recipe = {name:'',description:'',imagePath:''}
   }

  ngOnInit(): void {
    const ShoppingData = this.shoppingService.addShoppingList({name:'banana',amount:12})
    console.log(ShoppingData)

  }

  onSelected(){
    this.recipeSelected.emit();
  }
}
