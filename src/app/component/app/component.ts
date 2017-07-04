import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ColorsDialog } from '../../dialog/colors/component';
@Component({
  selector: 'app-root',
  template: `
    <block-preheader></block-preheader>
    <div class="unicorn-dark-theme">
      <button md-raised-button class="mat-color mat-primary" (click)="openPaletteDialog()">Palette</button>
    </div>
    <div class="unicorn-light-theme">
      <button md-raised-button class="mat-color mat-primary">Click me!</button>
    </div>
  `,
  styles: [`
    
  `]
})
export class AppComponent {
  constructor(public dialog: MdDialog) {

  }

  openPaletteDialog() {
    this.dialog.open(ColorsDialog, {
      data: {
        palettes: ['primary', 'symbol', 'accent']
      }
    });
  }
}
