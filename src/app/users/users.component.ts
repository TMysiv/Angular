import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IUser} from "../interfaces/user.interface";
import {UService} from "../u.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:IUser[]

  @Output()
  userEmitter = new EventEmitter<IUser>()

  constructor(private usersService:UService) { }

  ngOnInit(): void {
  this.usersService.getAll().subscribe(value => this.users = value)
  }

  catchUser(user:IUser) {
    this.userEmitter.emit(user)
  }
}
