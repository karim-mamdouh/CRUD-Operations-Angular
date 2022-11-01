import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginGroup: FormGroup = this._loginBuilder.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/),
      ],
    ],
    password: ['', [Validators.required]],
  });
  constructor(private _loginBuilder: FormBuilder) {}
  handleSubmit(): void {
    console.log(this.loginGroup.get('email'));
  }
  getControl(name: string): FormControl {
    return this.loginGroup.controls[name] as FormControl;
  }
  ngOnInit(): void {}
}
