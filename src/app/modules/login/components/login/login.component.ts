import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

import {LoginService} from "../../services";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  errorUser: string

  constructor(private loginService: LoginService, private router: Router) {
    this.createForm()
  }

  ngOnInit(): void {
  }

  createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    })
  }

  login() {
    const user = this.form.value;
    this.loginService.login(user).subscribe({

      next:value => { this.loginService.setToken(value),
        this.router.navigate(['cars'])},

      error:e => {
        this.errorUser = e.error.detail
      }
    }
    )

  }
}
