import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HomeService } from 'src/app/_service/home.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('f') signUpForm?:NgForm
  defaultQuestion='pet'
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.signUpForm)
  }
}
