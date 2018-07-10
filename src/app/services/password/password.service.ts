import { Injectable } from '@angular/core';


@Injectable()
export class PasswordService {

  public password:string;
  public passwordStrength:any;

  constructor(){
    this.password = '';
    this.passwordStrength = 0;
  }

  setData (newPassword) {
    this.password = newPassword;
    console.log(this.password);
  }
  
  getData () {
    return this.password;
  }

}
