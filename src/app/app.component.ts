import {Component, OnInit} from '@angular/core';
import {UsersService} from "./users.service";
import {IUser} from "./interfaces/user.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular';

  user:IUser

  constructor(private userService:UsersService) {
  }

  ngOnInit(): void {
    this.userService.storage.subscribe(value => this.user =value)
  }


}
