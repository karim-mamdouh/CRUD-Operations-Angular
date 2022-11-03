import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showErrors: boolean = false;
  wrongUser: boolean = false;
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

  constructor(
    private _loginBuilder: FormBuilder,
    private _apiService: ApiService,
    private _router: Router
  ) {}

  handleSubmit(): void {
    if (this.loginGroup.status !== 'VALID') {
      this.showErrors = true;
    } else {
      this._apiService
        .login(
          this.loginGroup.value['email']!,
          this.loginGroup.value['password']!
        )
        .subscribe((res) => {
          if (res.length > 0) {
            localStorage.setItem('token', 'true');
            this._router.navigate(['/']);
          } else {
            this.wrongUser = true;
          }
        });
    }
  }
  get formControls() {
    return this.loginGroup.controls;
  }

  ngOnInit(): void {}
}
