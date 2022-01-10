import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/_service/home.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usertype:string='userrr'

  constructor(public homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.userEmitter.subscribe((res)=>{
      this.usertype = res
    })
  }

}
