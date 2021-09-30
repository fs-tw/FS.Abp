import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaDescriptorsMainComponent } from './components/media-descriptors-main/media-descriptors-main.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'media-descriptor', pathMatch: 'full' },
      { path: 'media-descriptor', component: MediaDescriptorsMainComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediaDescriptorsRoutingModule {}
