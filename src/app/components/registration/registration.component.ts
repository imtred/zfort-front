import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(
    private router: Router,
    private _auth: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.registrationForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  submit() {
    const user = this.registrationForm.getRawValue();
    this._auth.registration(user).subscribe(
      success => {
        this.snackBar.open('You successfully registered', 'Close', {
          duration: 3000
        });
        this.router.navigate(['login']);
      },
      (error: any) => {
        const msg = error.error.errors[0].msg;
        this.snackBar.open(msg, 'Close', {
          duration: 3000
        });
      }
    );
  }

  back() {
    this.router.navigate(['']);
  }
}
