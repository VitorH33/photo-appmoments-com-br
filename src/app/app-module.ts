import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Foto } from './componentes/foto/foto';
import { WebcamModule } from 'ngx-webcam';
import { WaitIcon } from './componentes/wait-icon/wait-icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [App, Foto, WaitIcon],
  imports: [BrowserModule, AppRoutingModule, WebcamModule, HttpClientModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
