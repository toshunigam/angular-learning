import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FirebaseModal } from './firebase.modal';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  loadedPosts:FirebaseModal[] = []
  isFetching:boolean=false

  sampleForm = new FormGroup({
    'title':new FormControl('',Validators.required),
    'name':new FormControl('',Validators.required),
    'description':new FormControl('',Validators.required)
  })
  constructor(private firebaseService:FirebaseService ,private http:HttpClient) { }

  ngOnInit(): void {
    this.onFetchPosts()
  }

  onSubmit(){
    console.log(this.sampleForm.value)
    this.firebaseService.createAndSavePosts(this.sampleForm.value)
  }

  onFetchPosts(){
    this.isFetching = true;
    this.firebaseService.fetchPosts().subscribe(posts=>{
      this.isFetching = false
      this.loadedPosts = posts
    })
  }

  onClearPosts(){
    this.isFetching = true;
    this.firebaseService.deletePosts().subscribe(()=>{
      this.isFetching=false;
      this.loadedPosts = []
    })
  }

}
