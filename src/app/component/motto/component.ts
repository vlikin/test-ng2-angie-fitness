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
}
