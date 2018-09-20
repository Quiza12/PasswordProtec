import { Component, OnInit } from '@angular/core';
import { StrengthsService } from '../../services/strengths/strengths.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  reasonsAndAnswers = [];

  constructor(private strengthsService:StrengthsService) { }

  ngOnInit() {
    this.reasonsAndAnswers = this.strengthsService.strengthReasons;
  }

  getReasonsAndAnswers() {
    return this.reasonsAndAnswers;
  }

}
