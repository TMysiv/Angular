import {Component, OnInit} from '@angular/core';

import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces/IUser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  users:IUser[];

  constructor(private UserService: UserService) {
  }

  ngOnInit():void {
    this.UserService.getUsers().subscribe(value => this.users = value)
  }
}
