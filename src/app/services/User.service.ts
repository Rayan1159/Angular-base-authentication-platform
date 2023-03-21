import { Injectable } from '@angular/core';
import {IUserInterface} from "../interfaces/IUserInterface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  get() { localStorage.getItem("user") }
  constructor() { }

  public set(value: IUserInterface) {
    localStorage.setItem("user", JSON.stringify(value))
  }
}
