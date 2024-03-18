import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  _hiremeOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  _portfolioOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public setHiremeOn(hiremeOn: boolean): void {
    this._hiremeOn.next(hiremeOn);
  }

  public getHiremeOn() {
    return this._hiremeOn.asObservable();
  }

  public setPortfolioOn(portfolioOn: boolean): void {
    this._portfolioOn.next(portfolioOn);
  }

  public getPortfolioOn() {
    return this._portfolioOn.asObservable();
  }
}
