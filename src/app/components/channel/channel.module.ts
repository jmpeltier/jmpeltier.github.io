import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GalleriaModule } from 'primeng/galleria';
import { StoreModule } from '@ngrx/store';
import { ChannelComponent } from './channel.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [ChannelComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({}),
    GalleriaModule,
    ButtonModule,
    ScrollPanelModule,
    InputTextModule

  ],
  providers: [],
  exports: [ChannelComponent],
})
export class ChannelModule {}
