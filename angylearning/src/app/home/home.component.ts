import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { HomeService } from '../_service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private firstObsSubscription?: Subscription
  constructor(public homeService: HomeService) { }
  usertype?:string
  ngOnInit(): void {
    this.homeService.userEmitter.subscribe((res)=>{
      this.usertype = res
    })
// this.firstObsSubscription = interval(1000).subscribe(count=>console.log(count))
  }

  ngOnDestroy(){
    // this.firstObsSubscription?.unsubscribe()
  }

  clickMe(){
    this.homeService.userEmitter.next('Customer')
  }

}
