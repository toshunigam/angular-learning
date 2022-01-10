import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class HomeService{
    userEmitter = new Subject<string>()
}