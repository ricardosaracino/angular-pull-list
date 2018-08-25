import {Component, OnInit} from '@angular/core';

import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;

  public password: string;

  public hidePassword = true;

  public loginSuccessful = undefined;

  public sendingLogin = false;


  constructor(private authService: AuthService, private readonly router: Router) {
  }

  public ngOnInit() {
  }

  public login() {

    this.sendingLogin = true;

    this.authService.login(this.username, this.password).subscribe(
      (success) => {
        this.loginSuccessful = (true === success);

        this.sendingLogin = false;

        this.router.navigate([this.authService.redirectUrl]);
      }
    );
  }
}
