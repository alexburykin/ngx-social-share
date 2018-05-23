import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSocialShareModule } from 'ngx-social-share';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSocialShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
