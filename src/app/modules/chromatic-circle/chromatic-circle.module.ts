import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoColorsComponent } from './info-colors/info-colors.component';
import { ChromaticCircleUiComponent } from './chromatic-circle-ui/chromatic-circle-ui.component';
import { ChromaticStoryComponent } from './chromatic-story/chromatic-story.component';
import { ChromaticModelsComponent } from './chromatic-models/chromatic-models.component';
import { ChromaticForTattoosComponent } from './chromatic-for-tattoos/chromatic-for-tattoos.component';
import { ChromaticApiComponent } from './chromatic-api/chromatic-api.component';



@NgModule({
  declarations: [
    InfoColorsComponent,
    ChromaticCircleUiComponent,
    ChromaticStoryComponent,
    ChromaticModelsComponent,
    ChromaticForTattoosComponent,
    ChromaticApiComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChromaticCircleModule { }
