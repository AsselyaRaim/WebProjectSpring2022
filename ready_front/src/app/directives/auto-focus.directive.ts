import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective {

  constructor(private host: ElementRef) { }

  ngAfterViewInit(){
    this.host.nativeElement.focus();
  }

  ngOnDestroy(){
    this.host.nativeElement.blur();
  }
}