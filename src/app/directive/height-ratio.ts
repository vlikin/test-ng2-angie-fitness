import {
  Directive, ElementRef, AfterViewChecked, Input
} from '@angular/core';

@Directive({
  selector: '[heightRatio]'
})
export class HeightRatioDirective implements AfterViewChecked {
  @Input()heightRatio: number;

  constructor(private el: ElementRef) {}

  ngAfterViewChecked() {
    console.log(this.heightRatio);
    this.el.nativeElement.style.height = (this.el.nativeElement.getBoundingClientRect().width * this.heightRatio) + 'px';
  }
}