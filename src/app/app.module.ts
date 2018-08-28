import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { AboutComponent } from './pages/about/about.component';
import { InfoComponent } from './pages/info/info.component';
import { PasswordFormComponent } from './components/form/form.component';

import { StrengthsService } from './services/strengths/strengths.service';
import { PasswordService } from './services/password/password.service';
import { DiehardService } from './services/diehard/diehard.service';

import { RouterModule, Routes } from '@angular/router';


//use Angular 4 Reactive Forms

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'info', component: InfoComponent },
  { path: '', component: MainComponent }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PasswordFormComponent,
    AboutComponent,
    MainComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    StrengthsService,
    PasswordService,
    DiehardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
