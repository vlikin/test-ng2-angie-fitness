import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ColorsDialog } from '../../dialog/colors/component';

@Component({
  selector: 'block-preheader',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss']
})
export class PreheaderComponent {
  constructor(public dialog: MdDialog) {}

  openPaletteDialog() {
    this.dialog.open(ColorsDialog, {
      data: {
        palettes: ['primary', 'symbol', 'accent']
      }
    });
  }
}
