import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers = [
    {
      instanceType:'medium',
      name:'Production Server',
      status:'stable',
      started: new Date(1,1,2022)
    },
    {
      instanceType:'Large',
      name:'User Database',
      status:'stable',
      started: new Date(2,2,2022)
    },
    {
      instanceType:'small',
      name:'Dev Server',
      status:'offline',
      started: new Date(1,12,2020)
    },
    {
      instanceType:'small',
      name:'Testing Server',
      status:'stable',
      started: new Date(1,12,2022)
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getStatusClasses(server:{instanceType:string,name:string,status:string,started:Date}){
    return {
      'list-group-item-success':server.status === 'stable',
      'list-group-item-warning':server.status === 'offline',
      'list-group-item-dabger':server.status === 'critical'
    }
  }

}
