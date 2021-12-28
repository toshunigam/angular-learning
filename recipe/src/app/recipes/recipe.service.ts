import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>()
  
  private recipes: Recipe[] = [
    new Recipe('Toshu','This is toshu, leave a comment','https://c.ndtvimg.com/2021-02/gsq3frgg_fish-fry_625x300_10_February_21.jpg'),
    new Recipe('A taste recipe','This is for testing purpose','https://c.ndtvimg.com/2021-02/gsq3frgg_fish-fry_625x300_10_February_21.jpg'),
    new Recipe('A tasty Treat','This is for testy purpose','https://thumbs.dreamstime.com/b/seer-fish-fry-arranged-beautifully-garnished-onion-lemon-tomato-slices-banana-leaf-covered-base-which-placed-wooden-219325107.jpg')
  ]
  
  getRecipes(){
    return this.recipes.slice()
  }
}