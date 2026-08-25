import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Foto } from './componentes/foto/foto';
import { WebcamModule } from 'ngx-webcam';

@NgModule({
  declarations: [App, Foto],
  imports: [BrowserModule, AppRoutingModule, WebcamModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
