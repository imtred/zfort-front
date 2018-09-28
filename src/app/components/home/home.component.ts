import { User } from './../../interfaces/user';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  authorizedUser: User;

  constructor(
    private _auth: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getProfile();
  }

  getProfile(): void {
    this._auth.profile().subscribe((success: User) => {
      this.authorizedUser = success;
    });
  }

  logout(): void {
    this._auth.logout().subscribe(success => {
      console.log(success);
      this.snackBar.open('You successfully logged out', 'Close', {
        duration: 3000
      });
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    });
  }
}
