import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StrengthsService } from './strengths/strengths.service';

//use Angular 4 Reactive Forms

@NgModule({
  declarations: [
    AppComponent,
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
