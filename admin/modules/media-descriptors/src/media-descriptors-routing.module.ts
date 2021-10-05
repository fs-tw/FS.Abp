import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'media-descriptor', pathMatch: 'full' },
      { path: 'media-descriptor', component: MainComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediaDescriptorsRoutingModule {}
