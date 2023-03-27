import { Pipe, PipeTransform } from "@angular/core";
import { LANG_EN_NAME, LANG_EN_TRANS } from "../_lang/lang-en";
import { LANG_IN_NAME, LANG_IN_TRANS } from "../_lang/lang-in";

@Pipe({
    name:'translate',
    pure:true
})
export class Translation implements PipeTransform{
    transform(value: any, language:string) {
        if(LANG_EN_NAME===language){
            var langText; 
            Object.entries(LANG_EN_TRANS).forEach(([key,val])=>{
                if(key===value){
                    langText=val
                }
            })
        }else if(LANG_IN_NAME===language){
            var langText; 
            Object.entries(LANG_IN_TRANS).forEach(([key,val])=>{
                if(key===value){
                    langText=val
                }
            })
        }else{
            langText='no translation configured'
        }

        return langText
    }
}