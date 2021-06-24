import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VocabulariesRoutingModule } from './vocabularies-routing.module';
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';

import { ThemeAlainSharedModule } from '@fs-tw/theme-alain/shared';

//import { Fs } from '../../../../apps/alain-app/src/app/proxy';

export function test(name: any) {

}

@NgModule({
  declarations: [MainComponent, ListComponent],
  imports: [CommonModule, VocabulariesRoutingModule, ThemeAlainSharedModule],
  exports: [MainComponent, ListComponent],
})
export class VocabulariesModule {
  // a: Fs.Customers.Querys.Customers.FindQuery = {
  //   discriminator: 'Fs.Customers.Querys.Customers.FindQuery',
  //   id: {
  //     id: '123456',
  //   },
  // };
  constructor() {
    
  }
  test_123(){
    //test(Fs.Customers.Querys.Customers.FindQueryImpl.Create())

  }
}
