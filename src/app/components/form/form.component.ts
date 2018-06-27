import { Component, OnInit } from '@angular/core';
import { PasswordService } from './../../services/password/password.service';
import { StrengthsService } from './../../services/strengths/strengths.service';

@Component({
  selector: 'app-password-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class PasswordFormComponent implements OnInit {

  password:string;

  constructor(private strengthsService:StrengthsService, private passwordService:PasswordService) { }

  ngOnInit() {
    this.password = '';
  }

  onKey(event: any) { // without type info
    this.password = event.target.value;
    this.passwordService.setData(this.password);
    this.strengthsService.clearTempArray();
    this.getReasonsForPassword();
  }

  getReasonsForPassword() {
    for (var i = 0; i < this.strengthsService.strengthReasons.length; i++) {

      switch (this.strengthsService.strengthReasons[i].tag) {
        case 'length' : this.determineLengthTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        case 'numerics' : this.determineNumericsTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        case 'specialChars' : this.determineSpecialCharsTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        case 'uppercase' : this.determineUppercaseTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        case 'lowercase' : this.determineLowercaseTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        case 'password' : this.determinePasswordTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        case 'nsync' : this.determineNsyncTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        case 'swearWords' : this.determineSwearWordsTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        case 'sequentialNumbers' : this.determinePasswordTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        case 'grandFinal' : this.determineGrandFinalTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        case 'jesus' : this.determineJesusTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        case 'racist' : this.determineRacistTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        //case 'crypto' : return determineCryptoTag(query);
      }
    }
  }

  determineLengthTag(password:string, reason:string) {
    if (password.length >= 0 && password.length <= 8) {
      this.strengthsService.addToTempArray(reason);
    }
  }

  determineNumericsTag(password:string, reason:string) {
    if (!password.match(/[\d]/)) {
      this.strengthsService.addToTempArray(reason);
    }
  }

  determineSpecialCharsTag(password:string, reason:string) {
    if (!password.match(/[.!@#$%^&*()_+=-]/)) {
      this.strengthsService.addToTempArray(reason);
    }
  }

  determineUppercaseTag(password:string, reason:string) {
    if (!password.match(/[A-Z]/)) {
      this.strengthsService.addToTempArray(reason);
    }
  }

  determineLowercaseTag(password:string, reason:string) {
    if (!password.match(/[a-z]/)) {
      this.strengthsService.addToTempArray(reason);
    }
  }

  determinePasswordTag(password:string, reason:string) {
    if (password.match(/password/i)) {
      this.strengthsService.addToTempArray(reason);
    }
  }

  determineNsyncTag(password:string, reason:string) {
    if (!password.match(/lance|bass|jc|chasez|joey|fatone|chris|kirkpatrick|justin|timberlake/i)) {
      this.strengthsService.addToTempArray(reason);
    }
  }

  determineSwearWordsTag(password:string, reason:string) {
    if (!password.match(/fuck|shit|cunt|twat|bitch|bastard|motherfucker/i)) {
      this.strengthsService.addToTempArray(reason);
    }
  }

  determineSequentialNumbersTag(password:any, reason:string) {
    for (var i in password) {
      if (+password[+i+1] == +password[i]+1 && +password[+i+2] == +password[i]+2) {
        this.strengthsService.addToTempArray(reason);
      }
    }
  }

  determineGrandFinalTag(password:string, reason:string) {
    if (!password.match(/4/)) {
      this.strengthsService.addToTempArray(reason);
    }
  }

  determineJesusTag(password:string, reason:string) {
    if (!password.match(/jesus|christ|lord|god|saviour|son/i)) {
      this.strengthsService.addToTempArray(reason);
    }
  }

  determineRacistTag(password:string, reason:string) {
    if (password.match(/abo|aboriginal|dink|cracker|coon|nigger|chink|eyetie|wog|gyppo|injun|raghead|terrorist|tacohead|towelhead|wetback/i)) {
      this.strengthsService.addToTempArray(reason);
    }
  }

}
