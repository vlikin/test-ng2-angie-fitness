import { Component } from '@angular/core';

@Component({
  selector: 'block-hero',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss'],
  host: {'class': 'block-hero'}
})
export class HeroComponent {
}
