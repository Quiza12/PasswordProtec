import { Component, OnInit } from '@angular/core';
import { StrengthsService } from '../../services/strengths/strengths.service';
import { PasswordService } from '../../services/password/password.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = 'app';
  strengthReasons = [];
  tempReasons = [];
  //topFourthReasons = [];
  password:string;
  passwordStrength:any = this.passwordService.passwordStrength;
  strengthListLength:any;
  originalListLength:any;

  constructor(private strengthsService:StrengthsService, private passwordService:PasswordService) { }

  ngOnInit() {
    this.strengthReasons = this.strengthsService.strengthReasons;
    this.tempReasons = this.strengthsService.tempReasons;
    this.originalListLength = this.strengthsService.strengthReasons.length;
    this.strengthListLength = 39;
  }

  getReasonsForPassword() {
    this.strengthListLength = this.strengthsService.tempReasons.length;
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
      return 'You might as print out your password and put it on a billboard.';
    } else if ((this.password.length) >= 4 && (this.password.length) < 8) {
      return 'Better, but need to pump more iron.';
    } else if ((this.password.length) >= 8 && (this.password.length) < 12) {
      return 'Harder...';
    } else if ((this.password.length) >= 12 && (this.password.length) < 16) {
      return 'They\'ll have a hard time with this.';
    } else if ((this.password.length) >= 16 && (this.password.length) < 20) {
      return 'Work it [desired gender term].';
    } else if ((this.password.length) >= 20 && (this.password.length) < 24) {
      return 'Oh yes...';
    } else if ((this.password.length) >= 24 && (this.password.length) < 28) {
      return 'Oh jeez, keep doing that with your tongue.';
    } else if ((this.password.length) >= 28 && (this.password.length) < 32) {
      return 'Yes...';
    } else if ((this.password.length) >= 32 && (this.password.length) < 36) {
      return 'GOD ALMIGHTY';
    } else if ((this.password.length) >= 36 && (this.password.length) < 40) {
      return 'NO ONE\'S GETTING PAST THIS!';
    }
  }

}
