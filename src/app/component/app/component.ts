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
          <block-motto></block-motto>
        </div>
      </div>
      <div class="section">
        <div class="vh100 sfx-container-column">
          <block-about></block-about>
          <block-motto></block-motto>
        </div>
      </div>
      <div class="section">
        <div class="vh100 sfx-container-column">
          <block-testimonials></block-testimonials>
          <block-motto></block-motto>
        </div>
      </div>
      <div class="section">
        <div class="vh100 sfx-container-column">
          <block-motto></block-motto>
          <block-partners></block-partners>
          <block-footer></block-footer>
        </div>
      </div>
    </div>
    <!--<block-preheader></block-preheader>-->
    <!--<block-header></block-header>-->
    <!--<block-hero></block-hero>-->
    <!--<block-subscribe></block-subscribe>-->
    <!--<block-plan></block-plan>-->
    <!--<block-about></block-about>-->
    <!--<block-blog></block-blog>-->
    <!--<block-testimonials></block-testimonials>-->
    <!--<block-motto></block-motto>-->
    <!--<block-partners></block-partners>-->
    <!--<block-footer></block-footer>-->
  `,
  styleUrls: [ 'styles.scss' ]
})
export class AppComponent {
  // https://github.com/alvarotrigo/fullPage.js#options
  public options: any = {
    autoScrolling: false
  };
}
