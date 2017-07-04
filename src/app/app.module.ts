import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdIconModule,
  MdDialogModule
} from '@angular/material';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './component/app/component';
import { PreheaderComponent } from './component/preheader/component';
import { ColorsDialog } from './dialog/colors/component';

@NgModule({
  declarations: [
    AppComponent,
    PreheaderComponent,
    ColorsDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    MdButtonModule,
    MdDialogModule,
    MdIconModule
  ],
  providers: [],
  entryComponents: [
    ColorsDialog
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
