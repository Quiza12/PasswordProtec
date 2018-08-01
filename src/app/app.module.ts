import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PasswordFormComponent } from './components/form/form.component';

import { StrengthsService } from './services/strengths/strengths.service';
import { PasswordService } from './services/password/password.service';
import { MainComponent } from './pages/main/main.component';
import { AboutComponent } from './pages/about/about.component';
import { SubmitComponent } from './pages/submit/submit.component';

import { RouterModule, Routes } from '@angular/router';

//use Angular 4 Reactive Forms

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'submit', component: SubmitComponent },
  { path: '', component: MainComponent }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PasswordFormComponent,
    AboutComponent,
    SubmitComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    StrengthsService,
    PasswordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
