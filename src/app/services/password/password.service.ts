import { Injectable } from '@angular/core';


@Injectable()
export class PasswordService {

  public password:string;

  constructor(){
    this.password = '';
  }

  setData (newPassword) {
    this.password = newPassword;
    console.log(this.password);
  }
  getData () {
    return this.password;
  }

}
