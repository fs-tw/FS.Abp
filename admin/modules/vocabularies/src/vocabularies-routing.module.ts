import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VocabulariesComponent } from './components/vocabularies.component';

const routes: Routes = [
  { path: '', redirectTo: 'vocabulary', pathMatch: 'full' },
  { path: 'vocabulary', component: VocabulariesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VocabulariesRoutingModule { }
