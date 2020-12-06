import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';

@NgModule({
  imports: [
    CoreModule,
    ThemeSharedModule,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    CoreModule,
    ThemeSharedModule,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
})

export class SharedModule {}
