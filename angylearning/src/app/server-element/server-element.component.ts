import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  
  @Input() element : {type:string,name:string,content:string}

  constructor() {
    this.element = {type:'',name:'',content:''}
    console.log('constructor called')
  }

  ngOnInit(): void {
    console.log('ngOninit called!')
  }

  ngOnChanges(changes:SimpleChange){
    console.log('ngOnChanges called!')
    console.log(changes)
  }

}
