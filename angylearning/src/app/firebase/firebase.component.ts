import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { FirebaseModal } from './firebase.modal';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  loadedPosts = []
  sampleForm = new FormGroup({
    'title':new FormControl('',Validators.required),
    'name':new FormControl('',Validators.required),
    'description':new FormControl('',Validators.required)
  })
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.fetchPosts()
  }

  onSubmit(){
    console.log(this.sampleForm.value)

    // Send HTTP request to firebase
    this.http.post(`https://learning-angularjs-6ecf7-default-rtdb.firebaseio.com/posts.json`,this.sampleForm.value).subscribe(responseData=>{
      console.log(responseData)
    })

  }

  onFetchPosts(){
    this.fetchPosts()
  }

  onClearPosts(){}

  private fetchPosts(){
    this.http.get<{[key:string]:FirebaseModal }>(`https://learning-angularjs-6ecf7-default-rtdb.firebaseio.com/posts.json`)
    .pipe(map(responseData=>{
      const postsArray:FirebaseModal[] = []
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postsArray.push({ ...responseData[key], id:key })
        }
      }
      return postsArray;
    }))
    .subscribe(posts=>{
      console.log(posts)
    })
  }
}
