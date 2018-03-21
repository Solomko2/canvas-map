import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FloorCanvasNativeComponent} from './floor-canvas-native/floor-canvas-native.component';
import {FloorCanvasComponent} from './floor-canvas/floor-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    FloorCanvasNativeComponent,
    FloorCanvasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
