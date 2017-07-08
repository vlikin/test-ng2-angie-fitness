import {
  Directive, ElementRef, AfterViewChecked
} from '@angular/core';

@Directive({
  selector: '[square]'
})
export class SquareDirective implements AfterViewChecked {
  constructor(private el: ElementRef) {}

  ngAfterViewChecked() {
    this.el.nativeElement.style.height = this.el.nativeElement.getBoundingClientRect().width + 'px';
  }
}