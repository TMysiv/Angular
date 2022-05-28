import { Component } from '@angular/core';
import {IUser} from "./interfaces/user.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  user:IUser

  constructor() {
  }

  catch(user: IUser) {
    this.user = user
  }
}
