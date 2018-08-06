import { Component, OnInit } from '@angular/core';
import { PasswordService } from './../../services/password/password.service';
import { StrengthsService } from './../../services/strengths/strengths.service';
import { DiehardService } from './../../services/diehard/diehard.service';

@Component({
  selector: 'app-password-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class PasswordFormComponent implements OnInit {

  password:string;
  formType:string;
  hideOrShowButtonTag:string;

  constructor(
    private strengthsService:StrengthsService,
    private passwordService:PasswordService,
    private diehardService:DiehardService
  ) { }

  ngOnInit() {
    this.password = '';
    this.formType = 'password';
    this.hideOrShowButtonTag = 'Show';
    console.log(this.getDieHardText());
  }

  showOrHidePassword() {
    if (this.formType === 'text') {
      this.formType = 'password';
      this.hideOrShowButtonTag = 'Show';
    } else {
      this.formType = 'text';
      this.hideOrShowButtonTag = 'Hide';
    }
  }

  onKey(event: any) { // without type info
    this.password = event.target.value;
    this.passwordService.setData(this.password);
    this.strengthsService.clearTempArray();
    this.passwordService.passwordStrength = 0;
    this.getReasonsForPassword();
  }

  getDieHardText() {
    // this.diehardService.getDieHardText();
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
        case 'penis' : this.determinePenisTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        case 'vagina' : this.determineVaginaTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        case 'seven' : this.determineSevenTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        case 'avengers' : this.determineAvengersTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        case 'avengersDead' : this.determineAvengersDeadTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        case 'gel' : this.determineGelTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        case 'genghis' : this.determineGenghisTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        case 'wilson' : this.determineWilsonTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        case 'love' : this.determineLoveTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        case 'viagra' : this.determineViagraTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        case 'prada' : this.determinePradaTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        case 'lift' : this.determineLiftTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        case 'copyright' : this.determineCopyrightTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
        case 'emoji' : this.determineEmojiTag(this.password, this.strengthsService.strengthReasons[i].reason); break;
      }
    }
  }

  determineLengthTag(password:string, reason:string) {
    if (password.length >= 0 && password.length <= 8) {
      this.strengthsService.addToTempArray(reason);
    } else {
      this.passwordService.passwordStrength++;
    }
  }

  determineNumericsTag(password:string, reason:string) {
    if (!password.match(/[\d]/)) {
      this.strengthsService.addToTempArray(reason);
    } else {
      this.passwordService.passwordStrength++;
    }
  }

  determineSpecialCharsTag(password:string, reason:string) {
    if (!password.match(/[.!@#$%^&*()_+=-]/)) {
      this.strengthsService.addToTempArray(reason);
    } else {
      this.passwordService.passwordStrength++;
    }
  }

  determineUppercaseTag(password:string, reason:string) {
    if (!password.match(/[A-Z]/)) {
      this.strengthsService.addToTempArray(reason);
    } else {
      this.passwordService.passwordStrength++;
    }
  }

  determineLowercaseTag(password:string, reason:string) {
    if (!password.match(/[a-z]/)) {
      this.strengthsService.addToTempArray(reason);
    } else {
      this.passwordService.passwordStrength++;
    }
  }

  determinePasswordTag(password:string, reason:string) {
    if (password.match(/password/i)) {
      this.strengthsService.addToTempArray(reason);
    } else {
      this.passwordService.passwordStrength++;
    }
  }

  determineNsyncTag(password:string, reason:string) {
    if (!password.match(/lance|bass|jc|chasez|joey|fatone|chris|kirkpatrick|justin|timberlake/i)) {
      this.strengthsService.addToTempArray(reason);
    } else {
      this.passwordService.passwordStrength++;
    }
  }

  determineSwearWordsTag(password:string, reason:string) {
    if (!password.match(/fuck|shit|cunt|twat|bitch|bastard|motherfucker/i)) {
      this.strengthsService.addToTempArray(reason);
    } else {
      this.passwordService.passwordStrength++;
    }
  }

  determineSequentialNumbersTag(password:any, reason:string) {
    for (var i in password) {
      if (+password[+i+1] == +password[i]+1 && +password[+i+2] == +password[i]+2) {
        this.strengthsService.addToTempArray(reason);
        this.passwordService.passwordStrength++;
      }
    }
  }

  determineGrandFinalTag(password:string, reason:string) {
    if (!password.match(/4/)) {
      this.strengthsService.addToTempArray(reason);
    } else {
      this.passwordService.passwordStrength++;
    }
  }

  determineJesusTag(password:string, reason:string) {
    if (!password.match(/jesus|christ|lord|god|saviour|son/i)) {
      this.strengthsService.addToTempArray(reason);
    } else {
      this.passwordService.passwordStrength++;
    }
  }

  determineRacistTag(password:string, reason:string) {
    if (password.match(/abo|aboriginal|dink|cracker|coon|nigger|chink|eyetie|wog|gyppo|injun|raghead|terrorist|tacohead|towelhead|wetback/i)) {
      this.strengthsService.addToTempArray(reason);
      this.passwordService.passwordStrength++;
    }
  }

  determinePenisTag(password:string, reason:string) {
    if (password.match(/penis|dick|cock|willy|prick|knob|rod|phallus|shaft|member/i)) {
      this.strengthsService.addToTempArray(reason);
    } else {
      this.passwordService.passwordStrength++;
    }
  }

  determineVaginaTag(password:string, reason:string) {
    if (!password.match(/vagina|coochie|cunt|pussy|snatch|beaver|flower|peach/i)) {
      this.strengthsService.addToTempArray(reason);
    } else {
      this.passwordService.passwordStrength++;
    }
  }

  determineSevenTag(password:string, reason:string) {
    if (password.match(/7/)) {
      this.strengthsService.addToTempArray(reason);
    } else {
      this.passwordService.passwordStrength++;
    }
  }

  determineAvengersTag(password:string, reason:string) {
    if (!password.match(/Black\sPanther|BlackPanther|Black\sWidow|BlackWidow|Captain\sAmerica|CaptainAmerica|Captain\sMarvel|CaptainMarvel|Ant-Man|AntMan|AntMan|Hawkeye|Hulk|Iron\sMan|IronMan|Quicksilver|Scarlett\sWitch|ScarlettWitch|Thor|Spider-man|Spiderman|Spider\sman|Vision|War\sMachine|WarMachine|Doctor\sStrange|DoctorStrange|Falcon/i)) {
      this.strengthsService.addToTempArray(reason);
    } else {
      this.passwordService.passwordStrength++;
    }
  }

  determineAvengersDeadTag(password:string, reason:string) {
    if (password.match(/Vision|Black\sPanther|BlackPanther|T’Challa|Spider-man|Spiderman|Spider\sman|Doctor\sStrange|DoctorStrange|Scarlett\sWitch|ScarlettWitch/)) {
      this.strengthsService.addToTempArray(reason);
    } else {
      this.passwordService.passwordStrength++;
    }
  }

  determineGelTag(password:string, reason:string) {
    if (!password.match(/Spiker\sGel|Spiker-Gel|spiker/i)) {
      this.strengthsService.addToTempArray(reason);
    } else {
      this.passwordService.passwordStrength++;
    }
  }

  determineGenghisTag(password:string, reason:string) {
    if (!password.match(/Genghis\sKhan|Genghis|Khan/i)) {
      this.strengthsService.addToTempArray(reason);
    } else {
      this.passwordService.passwordStrength++;
    }
  }

  determineWilsonTag(password:string, reason:string) {
    if (!password.match(/wilson/i)) {
      this.strengthsService.addToTempArray(reason);
    } else {
      this.passwordService.passwordStrength++;
    }
  }

  //TO DO MORE ON
  determineLoveTag(password:string, reason:string) {
    if (!password.match(/love/i)) {
      this.strengthsService.addToTempArray(reason);
    } else {
      this.passwordService.passwordStrength++;
    }
  }

  determineViagraTag(password:string, reason:string) {
    if (!password.match(/viagra/i)) {
      this.strengthsService.addToTempArray(reason);
    } else {
      this.passwordService.passwordStrength++;
    }
  }

  determinePradaTag(password:string, reason:string) {
    if (!password.match(/prada/i)) {
      this.strengthsService.addToTempArray(reason);
    } else {
      this.passwordService.passwordStrength++;
    }
  }

  determineLiftTag(password:string, reason:string) {
    if (!password.match(/\d+kg/i)) {
      this.strengthsService.addToTempArray(reason);
    } else {
      this.passwordService.passwordStrength++;
    }
  }

  determineCopyrightTag(password:string, reason:string) {
    if (!password.match(/\u00A9/i)) {
      this.strengthsService.addToTempArray(reason);
    } else {
      this.passwordService.passwordStrength++;
    }
  }

  determineEmojiTag(password:string, reason:string) {
    if (!password.match(/\u{1F3AF}|\u{2196}/gu)) {
      this.strengthsService.addToTempArray(reason);
    } else {
      this.passwordService.passwordStrength++;
    }
  }

}
