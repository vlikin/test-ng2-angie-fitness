import { Component } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'block-testimonials',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss']
})
export class TestimonialsComponent {
  public avatarA = 'url(' + faker.image.avatar() + ')';
  public avatarB = 'url(' + faker.image.avatar() + ')';
  public avatarC = 'url(' + faker.image.avatar() + ')';

  constructor() {
    console.log(faker.image.avatar());
  }
}
