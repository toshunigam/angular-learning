import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A taste recipe','This is for testing purpose','https://c.ndtvimg.com/2021-02/gsq3frgg_fish-fry_625x300_10_February_21.jpg'),
    new Recipe('A taste recipe','This is for testing purpose','https://c.ndtvimg.com/2021-02/gsq3frgg_fish-fry_625x300_10_February_21.jpg')
  ]

  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipeEl:Recipe){
    this.recipeWasSelected.emit(recipeEl)
  }

}
