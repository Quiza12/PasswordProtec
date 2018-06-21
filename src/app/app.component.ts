import { Component, OnInit } from '@angular/core';
import { StrengthsService } from './strengths/strengths.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  strengthReasons = [];
  query = '';

  constructor(private strengthsService:StrengthsService) { }

  ngOnInit() {
    this.strengthReasons = this.strengthsService.strengthReasons;
  }



}
