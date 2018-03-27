import { Component, OnInit } from '@angular/core';
import { StrengthsService } from './strengths/strengths.service';
import { StrengthReason } from './strengths/strengthReason';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  strengthReasons: StrengthReason[];

  constructor(private strengthsService: StrengthsService) { }

  ngOnInit() {
   this.getStrengthReasons();
  }

  getStrengthReasons(): void {
    this.strengthsService.getStrengthReasons();
  }

}
