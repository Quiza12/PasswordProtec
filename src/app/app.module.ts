import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StrengthsService } from './strengths/strengths.service';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    StrengthsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
