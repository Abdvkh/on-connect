import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  hide = true;

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  loading = false;
  submitted = false;
  error = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    this.submitted = true;

    this.loading = true;

    this.authService
      .register(
        this.registerForm.get('username')?.value,
        this.registerForm.get('password')?.value,
      )
      .pipe(switchMap((user) => this.authService.login(user.username, user.password)))
      .pipe(first())
      .subscribe(
        (user) => {
          this.router.navigate(['/']);
        },
        (error) => {
          this.error = error;
          this.loading = false;
        }
      );
  }
}
