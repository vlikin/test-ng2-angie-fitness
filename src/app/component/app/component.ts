import { Component } from '@angular/core';
import 'jquery'; // Import jQuery
import 'fullpage.js'; // Import fullpage.js

@Component({
  selector: 'app-root',
  template: `
<div [mnFullpage]="options">
      <div class="section">
          <div class="vh100 sfx-container-column">
            <block-preheader></block-preheader>
            <block-header></block-header>
            <div class="sfx-container-column sfx-fill">
              <block-hero></block-hero>
            </div>
          </div>
      </div>
      <div class="section">
        <div class="vh100 sfx-container-column">
          <block-subscribe></block-subscribe>
          <block-plan></block-plan>
          <block-motto image="url('./assets/images/cover/yoga-1.jpg')" color="grey" hideIfHeight="true">
            <div>IF YOU WANT TO GIVE LIGHT TO OTHERS,</div>
            <div>YOU HAVE TO GLOW YOURSELF.</div>
          </block-motto>
        </div>
      </div>
      <div class="section">
        <div class="vh100 sfx-container-column">
          <block-about></block-about>
          <block-motto image="url('./assets/images/cover/running-1.jpg')" color="white" hideIfHeight="true">
            <div>ONLY I CAN CHANGE MY LIFE.</div>
            <div>NO ONE CAN DO IT FOR ME</div>
          </block-motto>
        </div>
      </div>
      <div class="section">
        <div class="vh100 sfx-container-column">
          <block-testimonials></block-testimonials>
          <block-motto image="url('./assets/images/cover/swimming-1.jpg')" color="black" hideIfHeight="true">
            <div>THE PAST CANNOT BE CHANGED</div>
            <div>THE FUTURE IS YET IN YOUR POWER.</div>
          </block-motto>
        </div>
      </div>
      <div class="section">
        <div class="vh100 sfx-container-column">
          <block-motto image="url('./assets/images/cover/cycling-1.jpg')" color="black" hideIfHeight="true">
            <div>ALWAYS DO YOUR BEST.</div>
            <div>WHAT YOU PLANT NOW,</div>
            <div>YOU WILL HARVEST LATER</div>
          </block-motto>
          <block-partners></block-partners>
          <block-footer></block-footer>
        </div>
      </div>
    </div>
  `,
  styleUrls: [ 'styles.scss' ]
})
export class AppComponent {
  // https://github.com/alvarotrigo/fullPage.js#options
  public options: any = {
    autoScrolling: false,
    scrollBar: true,
    menu: '.page-menu'
  };
}
