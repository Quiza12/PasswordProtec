import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { StrengthReason } from './strengthReason';
import { STRENGTHREASONS } from './strengthReasons';

@Injectable()
export class StrengthsService {

  constructor(private strengthsService: StrengthsService) { }

  getStrengthReasons(): Observable<StrengthReason[]> { return of(STRENGTHREASONS)}
  
}
