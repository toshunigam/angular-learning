import { Directive, 
    ElementRef, 
    HostBinding, 
    HostListener, 
    Input, 
    OnInit, 
    Renderer2 
} from "@angular/core";

@Directive({
    selector:'[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
    @Input() defaultBgColor:string = 'transparent'
    @Input() highlightBgColor:string = 'blue'

    @HostBinding('style.backgroundColor') backgroundColor:string;

    constructor(private renderer: Renderer2, private eleRef:ElementRef){
        this.backgroundColor = this.defaultBgColor
    }

    ngOnInit(): void {
        // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','#ffccaa', false, false)
    }

    @HostListener('mouseenter') mouseover(eventData:Event){
        // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','#ffccaa')
        // this.backgroundColor = '#00ccbb'
        this.backgroundColor = this.highlightBgColor
    }

    @HostListener('mouseleave') mouseleave(eventData:Event){
        // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','transparent')
        // this.backgroundColor = 'transparent'
        this.backgroundColor = this.defaultBgColor
    }

}