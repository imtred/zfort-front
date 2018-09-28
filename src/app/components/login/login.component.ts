import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private _auth: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
    if (this._auth.isAuthorized()) {
      this.router.navigate(['/home']);
    }
  }

  login(): void {
    const user = this.loginForm.getRawValue();
    this._auth.login(user).subscribe(
      success => {
        this.snackBar.open('You successfully logged in', 'Close', {
          duration: 3000
        });
        localStorage.setItem('token', success.token.access_token);
        this.router.navigate(['home']);
      },
      error => {
        const msg = error.error.errors[0].msg;
        this.snackBar.open(msg, 'Close', {
          duration: 3000
        });
      }
    );
  }

  registration(): void {
    this.router.navigate(['/registration']);
  }
}
