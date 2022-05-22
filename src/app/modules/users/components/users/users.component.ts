import { Component, OnInit } from '@angular/core';

import {IUser} from "../../interfaces";
import {UsersService} from "../../sevices";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:IUser[]

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(value => this.users = value)
  };

}
