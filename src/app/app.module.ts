import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChromaticCircleModule } from './modules/chromatic-circle/chromatic-circle.module';
import { TattooToolsModule } from './modules/tattoo-tools/tattoo-tools.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChromaticCircleModule,
    TattooToolsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
