import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'block-motto',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss']
})
export class MottoComponent {
  @HostBinding('style.background-image')
  @Input()
  image:string = '';

  @HostBinding('style.color')
  @Input()
  color:string = '';

   @HostBinding('class.hideIfHeight')
   @Input()
   hideIfHeight: boolean = false;

   @HostBinding('class.hideIfCell')
   @Input()
   hideIfCell: boolean = false;
}
