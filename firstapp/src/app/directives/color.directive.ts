import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private elementref:ElementRef) { 

  }

  @HostListener('mouseenter')onMouseEnter(){
    this.elementref.nativeElement.style.fontWeight = 'bold';
    this.elementref.nativeElement.style.backgroundColor = 'grey';
  }

  @HostListener('mouseleave')onMouseLeave(){
    this.elementref.nativeElement.style.fontWeight = 'normal';
    this.elementref.nativeElement.style.backgroundColor = 'initial'; 
  }



}
