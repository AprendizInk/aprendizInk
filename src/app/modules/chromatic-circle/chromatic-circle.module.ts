import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoColorsComponent } from './info-colors/info-colors.component';
import { ChromaticCircleUiComponent } from './chromatic-circle-ui/chromatic-circle-ui.component';



@NgModule({
  declarations: [
    InfoColorsComponent,
    ChromaticCircleUiComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChromaticCircleModule { }
