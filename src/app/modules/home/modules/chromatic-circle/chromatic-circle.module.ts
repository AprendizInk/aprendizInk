import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChromaticCircleUiComponent } from './chromatic-circle-ui/chromatic-circle-ui.component';
import { ChromaticForTattoosComponent } from './chromatic-for-tattoos/chromatic-for-tattoos.component';
import { ChromaticModelsComponent } from './chromatic-models/chromatic-models.component';
import { ChromaticStoryComponent } from './chromatic-story/chromatic-story.component';
import { ChromaticApiComponent } from './chromatic-api/chromatic-api.component';
import { InfoColorsComponent } from './info-colors/info-colors.component';


@NgModule({
  declarations: [
    ChromaticCircleUiComponent,
    ChromaticForTattoosComponent,
    ChromaticModelsComponent,
    ChromaticStoryComponent,
    ChromaticApiComponent,
    InfoColorsComponent
  ],
  imports: [
    CommonModule    
  ],
  exports: [
    ChromaticCircleUiComponent,
    ChromaticForTattoosComponent,
    ChromaticModelsComponent,
    ChromaticStoryComponent,
    ChromaticApiComponent,
    InfoColorsComponent
  ]
})
export class ChromaticCircleModule { }
