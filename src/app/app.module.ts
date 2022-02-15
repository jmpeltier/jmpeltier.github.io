import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChannelModule } from './components/channel/channel.module';
import { FourZeroFourModule } from './components/four-zero-four/four-zero-four.module';
import { AdminModule } from './components/admin/admin.module';
import { LoginModule } from './components/login/login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    CommonModule,
    AppRoutingModule,
    ChannelModule,
    AdminModule,
    LoginModule,
    FourZeroFourModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
