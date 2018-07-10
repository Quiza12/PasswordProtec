import { Component, OnInit } from '@angular/core';
import { StrengthsService } from './services/strengths/strengths.service';
import { PasswordService } from './services/password/password.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  strengthReasons = [];
  tempReasons = [];
  //topFourthReasons = [];
  password:string;
  passwordStrength:any = this.passwordService.passwordStrength;

  constructor(private strengthsService:StrengthsService, private passwordService:PasswordService) { }

  ngOnInit() {
    this.strengthReasons = this.strengthsService.strengthReasons;
    this.tempReasons = this.strengthsService.tempReasons;
  }

  getOriginalReasonsListLength() {
    return this.strengthsService.strengthReasons.length;
  }

  getReasonsForPassword() {
    return this.strengthsService.tempReasons;
  }

  getPassword() {
    return this.passwordService.getData();
  }

  getPasswordStrength() {
    return this.passwordService.passwordStrength;
  }

  getPasswordLength() {
    this.password = this.passwordService.getData();
    if ((this.password.length) !== undefined) {
      return this.password.length;
    } else {
      return 0;
    }
  }

  getTempReasonsLength() {
    this.tempReasons = this.strengthsService.tempReasons;
    if ((this.tempReasons.length) !== undefined) {
      return this.tempReasons.length;
    } else {
      return 0;
    }
  }

  getCharactersString() {
    if ((this.passwordService.getData().length) == 1) {
      return 'character';
    } else {
      return 'characters';
    }
  }

  getEncouragement() {
    this.password = this.passwordService.getData();
    if ((this.password.length) > 0 && (this.password.length) < 4) {
      return 'Oh hey, it\'s Equifax.';
    } else if ((this.password.length) >= 4 && (this.password.length) < 8) {
      return 'Better, but need to pump more iron.';
    }
  }

}
