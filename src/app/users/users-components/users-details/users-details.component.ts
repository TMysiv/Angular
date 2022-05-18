import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IUser} from "../../../interfaces";
import {UsersService} from "../../users-services/users.service";

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  userDetails:IUser;

  constructor(private activatedRoute:ActivatedRoute, private router:Router,private usersService:UsersService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['user'];

      if (state){
        this.userDetails = state;
      }

      else {
        this.usersService.getUser(id).subscribe(value => {
          this.userDetails = value
        })
      }

    })
  }

}
