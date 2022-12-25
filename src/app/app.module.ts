import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from './accordion/accordion.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AnimationDemoComponent } from './animation-demo/animation-demo.component'

@NgModule({
  declarations: [
    AppComponent,
    AnimationDemoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
