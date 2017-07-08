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
import { FooterComponent } from './component/footer/component';
import { HeaderComponent } from './component/header/component';
import { HeroComponent } from './component/hero/component';
import { PartnersComponent } from './component/partners/component';
import { PlanComponent } from './component/plan/component';
import { SubscribeComponent } from './component/subscribe/component';

import { ColorsDialog } from './dialog/colors/component';

import { SquareDirective } from './directive/squre';
import { HeightRatioDirective } from './directive/height-ratio';

@NgModule({
  declarations: [
    AppComponent,
    ColorsDialog,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    PartnersComponent,
    PlanComponent,
    PreheaderComponent,
    SubscribeComponent,

    HeightRatioDirective,
    SquareDirective
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
