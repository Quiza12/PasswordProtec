import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PasswordFormComponent } from './components/form/form.component';

import { StrengthsService } from './services/strengths/strengths.service';
import { PasswordService } from './services/password/password.service';

//use Angular 4 Reactive Forms

@NgModule({
  declarations: [
    AppComponent,
    PasswordFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    StrengthsService,
    PasswordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
