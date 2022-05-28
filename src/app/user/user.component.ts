import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../interfaces/user.interface";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user:IUser

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
  }

  saveToStorage() {
    this.userService.storage.next(this.user)
  }
}
