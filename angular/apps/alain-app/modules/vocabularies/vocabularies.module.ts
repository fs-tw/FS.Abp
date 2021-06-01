import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VocabulariesRoutingModule } from './vocabularies-routing.module';
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';

import { ThemeAlainSharedModule } from '@fs-tw/theme-alain/shared';

@NgModule({
  declarations: [
    MainComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    VocabulariesRoutingModule,
    ThemeAlainSharedModule
  ],
  exports: [
    MainComponent,
    ListComponent
  ]
})
export class VocabulariesModule { }
