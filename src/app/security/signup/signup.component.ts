import {Component, OnInit} from '@angular/core';
import {ErrorStateMatcher} from '@angular/material';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import {CustomValidators} from 'ngx-custom-validators';

import {SecurityService} from '../security.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class AppErrorStateMatcher implements ErrorStateMatcher {
  public isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public email;
  public password;
  public password2;

  public hidePassword = true;
  public hidePassword2 = true;

  public successful = undefined;

  public sending = false;

  public matcher = new AppErrorStateMatcher();

  private passwordFromControl = new FormControl(this.password, [
    Validators.required,
    Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,64}$'),
  ]);

  public signupForm = new FormGroup({
    'email': new FormControl('', [
      Validators.required,
      Validators.email,
    ]),

    'password': this.passwordFromControl,

    'password2': new FormControl(this.password2, [
      Validators.required,
      CustomValidators.equalTo(this.passwordFromControl)
    ]),
  });

  constructor(private securityService: SecurityService) {
  }

  public ngOnInit() {
  }

  public signup() {

    this.sending = true;

    this.securityService.signup(this.email, this.password).subscribe(
      (success) => {
        this.successful = (true === success);
        this.sending = false;
      }
    );
  }
}
