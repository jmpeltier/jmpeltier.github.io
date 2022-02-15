import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GalleriaModule } from 'primeng/galleria';
import { StoreModule } from '@ngrx/store';
import { FourZeroFourComponent } from './four-zero-four.component';

@NgModule({
  declarations: [FourZeroFourComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    GalleriaModule,
  ],
  providers: [],
  exports: [FourZeroFourComponent],
})
export class FourZeroFourModule {}
