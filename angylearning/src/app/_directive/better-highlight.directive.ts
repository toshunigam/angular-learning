import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
    constructor(private renderer: Renderer2, private eleRef:ElementRef){}

    ngOnInit(): void {
        // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','#ffccaa')
    }

    @HostListener('mouseenter') mouseover(eventData:Event){
        this.renderer.setStyle(this.eleRef.nativeElement,'background-color','#ffccaa')
    }

    @HostListener('mouseleave') mouseleave(eventData:Event){
        this.renderer.setStyle(this.eleRef.nativeElement,'background-color','transparent')
    }

}