import { registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  authObs: Observable<AuthResponseData>
  message;


  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {
      this.authObs = this.authService.login(email,password);
    } else {
      this.authObs = this.authService.signup(email, password);
    }
    this.authObs.subscribe(resData => {
    if(resData.success) {
      if(!this.isLoginMode) {
        this.router.navigate(['/auth'])
        this.message = "Verify your account by logging in using your credentials"
        this.isLoginMode = !this.isLoginMode;
      } else {
        this.isLoginMode = !this.isLoginMode;
        this.router.navigate(['/cocktails'])
      }
    }
  }, error => {
    this.error = error;
  }
  )
    form.reset();
}
}
