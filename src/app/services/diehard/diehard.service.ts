import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DiehardService {

  diehardUrl = 'assets/diehard.txt';
  scriptText:any;

  constructor(private http: HttpClient) { }

  getDieHardText() {
    return this.http.get(this.diehardUrl).subscribe(response => this.scriptText = response.toString());
  }

}
