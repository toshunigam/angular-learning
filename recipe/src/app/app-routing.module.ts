import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ServersComponent } from './servers/servers.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"product",
    pathMatch: 'full'
    // component:ProductComponent
  },
  {
    path:"product",
    component:ProductComponent
  },
  {
    path:"recipe",
    component:RecipesComponent
  },
  {
    path:"servers",
    component:ServersComponent
  },
  {
    path:"shopping-list",
    component:ShoppingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
