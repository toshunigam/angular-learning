import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
    @HostBinding('style.backgroundColor') backgroundColor:string = 'transparent'

    constructor(private renderer: Renderer2, private eleRef:ElementRef){}

    ngOnInit(): void {
        // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','#ffccaa', false, false)
    }

    @HostListener('mouseenter') mouseover(eventData:Event){
        // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','#ffccaa')
        this.backgroundColor = '#00ccbb'
    }

    @HostListener('mouseleave') mouseleave(eventData:Event){
        // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','transparent')
        this.backgroundColor = 'transparent'
    }

}