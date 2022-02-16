import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { FirebaseModal } from "./firebase.modal";

@Injectable({providedIn:'root'})
export class FirebaseService{

    constructor(private http:HttpClient){}
    createAndSavePosts(postData:FirebaseModal){
        // ...
         // Send HTTP request to firebase
        this.http.post(`https://learning-angularjs-6ecf7-default-rtdb.firebaseio.com/posts.json`,postData).subscribe(responseData=>{
            console.log(responseData)
        })
    }

    fetchPosts(){
        // ...
        return this.http.get<{[key:string]:FirebaseModal }>(`https://learning-angularjs-6ecf7-default-rtdb.firebaseio.com/posts.json`)
        .pipe(map(responseData=>{
          const postsArray:FirebaseModal[] = []
          for(const key in responseData){
            if(responseData.hasOwnProperty(key)){
              postsArray.push({ ...responseData[key], id:key })
            }
          }
          return postsArray;
        }))
    }

    deletePosts(){
        return this.http.delete(`https://learning-angularjs-6ecf7-default-rtdb.firebaseio.com/posts.json`)
    }
}