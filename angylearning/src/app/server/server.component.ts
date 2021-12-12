import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent{
    name = 'Resham'
    serverName:string='tets'
    serverDetails:string='test'

    onChangeServerName(event:Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}