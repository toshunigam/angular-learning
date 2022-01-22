import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productForm = new FormGroup({
    'title':new FormControl('',Validators.required),
    'name':new FormControl('',Validators.required),
    'quantity':new FormControl('',[Validators.min(0),Validators.max(100),Validators.required]),
    'price':new FormControl('',[Validators.min(0),Validators.required]),
    'description':new FormControl(''),
  })

  get f(){
    return this.productForm.controls
  }

  constructor() { }

  ngOnInit(): void {
    // this.productForm = 
  }

  onSubmit(){
    console.log(this.productForm)
  }

}
