import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { StrengthsService } from './services/strengths/strengths.service';
import { PasswordService } from './services/password/password.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  appLinkDisabled:boolean;
  aboutLinkDisabled:boolean;
  answersLinkDisabled:boolean;
  infoLinkDisabled:boolean;

  constructor(private router: Router) {
    this.appLinkDisabled = false;
    this.aboutLinkDisabled = false;
    this.answersLinkDisabled = false;
    this.infoLinkDisabled = false;
  }

  ngOnInit() {
    this.router.events.subscribe((event: NavigationEnd) => {
      console.log(event.url);
      switch(event.url) {
        case '/': this.appLinkDisabled = true;
        break;
        case '/about': this.aboutLinkDisabled = true;
        break;
        case '/answers': this.answersLinkDisabled = true;
        break;
        case '/info': this.infoLinkDisabled = true;
        break;
      }
      console.log(this.appLinkDisabled);
      console.log(this.aboutLinkDisabled);
      console.log(this.answersLinkDisabled);
      console.log(this.infoLinkDisabled);
    });

  }

}
