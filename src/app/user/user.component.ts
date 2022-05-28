import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from "../interfaces/user.interface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user:IUser

  @Output()
  userEmitter = new EventEmitter<IUser>()

  constructor() { }

  ngOnInit(): void {
  }

  emit() {
    this.userEmitter.emit(this.user)
  }
}
