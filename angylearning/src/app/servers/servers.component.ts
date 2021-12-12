import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean=false
  serverName:string='tets'
  serverDetails:string='test'
  

  constructor(){
    setTimeout(()=>{
      this.allowNewServer=true
    },2000)
  }

  onChangeServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    console.log('coming from servers component. Mind s in server',this.serverName)
  }
}
