import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() createdList = new EventEmitter<{name:string,amount:number}>()

  shoppingName:string = ''
  amount:number = 0

  constructor() { }

  ngOnInit(): void {
  }

  addShopping(){
    this.createdList.emit({name:this.shoppingName,amount:this.amount})
  }
}
