import { Component, Inject } from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'colors-dialog',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss']
})
export class ColorsDialog {
  current:any = false;
  palettes = ['primary', 'symbol', 'accent'];
  states = ['darker', 'default', 'lighter', 'darker-contrast', 'default-contrast', 'darker-contrast'];

  constructor(@Inject(MD_DIALOG_DATA) public data: any) {
    if (!!data.palettes) {
      this.palettes = data.palettes;
    }
  }

  select(palette, state) {
    this.current = {
      palette: palette,
      state: state
    };
  }
}
