import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IUser} from "../../interfaces";
import {UsersService} from "../../sevices";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user:IUser;

  constructor(private userService:UsersService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      const state = this.router.getCurrentNavigation()?.extras?.state?.['user'];

      if (state){
        this.user = state;
      }

      else {
        this.userService.getUser(id).subscribe(value => this.user = value);
      }
    })
  }

}
