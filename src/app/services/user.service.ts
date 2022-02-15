import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface messageSubject {
  user : string;
  message : string;
}


@Injectable({
  providedIn: 'root',
})

export class UserService {
  _userName: string = "";
  constructor() {
    this._userName = localStorage.getItem('user') || "";
  }

  public setUser(userName: string){
    this._userName = userName;
    localStorage.setItem('user', userName);
  }

  public getUser()
  {
      return this._userName;
  }
}
