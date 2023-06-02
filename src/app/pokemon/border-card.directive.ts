import { Directive, ElementRef , HostListener , Input} from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  readonly initialColor = "#f5f5f5" ;
  readonly defaultHeight = 180  ; 
  readonly defaultColor =  "#009688" ; 

  constructor(private el : ElementRef ) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
   }
   @Input('pkmnBorderCard') BorderColor : string ;

   @HostListener('mouseenter') onMouseEnter(){
      this.setBorder(this.BorderColor || this.defaultColor);
   }
   @HostListener('mouseleave') onMouseleave(){
    this.setBorder(this.initialColor);
 }
 

  setHeight( height : number ){
    let px = `${height}px`
    this.el.nativeElement.style.height = px;
  }
  setBorder(color : string){
    let border = `solid 4px ${color}`
    this.el.nativeElement.style.border =  border ;
  }

}
