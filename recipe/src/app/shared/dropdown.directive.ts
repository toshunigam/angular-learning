import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.show') isOpen = false

    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen
    }
    constructor(private ele:ElementRef, private renderer:Renderer2){}

}