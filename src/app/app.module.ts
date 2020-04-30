import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponentDesktop } from './signin/signin.component.desktop';
import { SigninComponentMobile } from './signin/signin.component.mobile';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponentDesktop,
    SigninComponentMobile
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [SigninComponentMobile],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
