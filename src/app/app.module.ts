import {enableProdMode} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { AboutComponent } from './pages/about/about.component';
import { InfoComponent } from './pages/info/info.component';
import { PasswordFormComponent } from './components/form/form.component';
import { AnswersComponent } from './pages/answers/answers.component';

import { StrengthsService } from './services/strengths/strengths.service';
import { PasswordService } from './services/password/password.service';

import { RouterModule, Routes, Router } from '@angular/router';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'info', component: InfoComponent },
  { path: 'answers', component: AnswersComponent },
  { path: '', component: MainComponent }
  //{ path: '**', component: PageNotFoundComponent }
];

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    PasswordFormComponent,
    AboutComponent,
    MainComponent,
    InfoComponent,
    AnswersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ClipboardModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    StrengthsService,
    PasswordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
