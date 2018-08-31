import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;

  public password: string;

  public hidePassword = true;

  public successful = undefined;

  public sending = false;


  constructor(private authService: AuthService, private readonly router: Router) {
  }

  public ngOnInit() {
  }

  public login() {

    this.sending = true;

    this.authService.login(this.username, this.password).subscribe(
      (success) => {
        this.successful = (true === success);
        this.sending = false;
        if (this.successful) {
          this.router.navigate([this.authService.redirectUrl]);
        }
      }
    );
  }
}
