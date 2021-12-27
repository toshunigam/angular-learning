import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root' //to access anywhere in the app and didnt need to provide it into app.module.ts provider array
})
export class ShoppingsService{

    addShoppingList(data:any){
        console.log(data)
    }
}