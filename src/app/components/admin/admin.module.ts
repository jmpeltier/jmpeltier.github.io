import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ScrollPanelModule } from 'primeng/scrollpanel';

import { GalleriaModule } from 'primeng/galleria';
import { CheckboxModule } from 'primeng/checkbox';
import { StoreModule } from '@ngrx/store';
import { AdminComponent } from './admin.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ColorPickerModule } from 'primeng/colorpicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({}),
    GalleriaModule,
    CheckboxModule,
    ScrollPanelModule,
    ButtonModule,
    InputTextModule,
    ColorPickerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  exports: [AdminComponent],
})
export class AdminModule {}
