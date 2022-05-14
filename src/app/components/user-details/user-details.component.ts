import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUserDetails} from "../../interfaces/userDetails.interface";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUserDetails;

  constructor(private activatedRoute: ActivatedRoute,private userService: UserService) {
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(value => {

      const {id} = value;
      const {state: {data}} = history;

      if (data) {
        this.userDetails = data;
      }

      else {
        this.userService.getUser(id).subscribe(data => {
          this.userDetails = data
        })
      }

    })
  }

}
