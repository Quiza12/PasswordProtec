import { Component, OnInit } from '@angular/core';
import { StrengthsService } from './services/strengths/strengths.service';
import { PasswordService } from './services/password/password.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

}
