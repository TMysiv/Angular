import { Component, OnInit } from '@angular/core';
import {IUser} from "../interfaces/user.interface";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:IUser[]

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(value => this.users = value)
  }

}
