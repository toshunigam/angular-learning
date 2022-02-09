import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'shorten'
})
export class ShortenPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        // console.log(args[0])
        const limit = args[0]
        if(value.length>limit){
            return value.substr(0,limit) + '...'
        }
        return value;
    }
}