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
  secretAnser=''
  genders = ['male','female']
  user = {
    username:'',
    email:'',
    question:'',
    answer:'',
    gender:''
  }
  submitted=false
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.signUpForm?.form.value.username)
    this.user.username = this.signUpForm?.form.value.username
    this.user.email = this.signUpForm?.form.value.email
    this.user.question = this.signUpForm?.form.value.secret
    this.user.answer = this.signUpForm?.form.value.questionAnswer
    this.user.gender = this.signUpForm?.form.value.gender

    this.signUpForm?.resetForm()
  }

  suggestUserName(){
    this.submitted = true
    const suggestedName = 'PoorPeople'
    this.signUpForm?.form.patchValue({
      username:suggestedName
    })
  }
}
