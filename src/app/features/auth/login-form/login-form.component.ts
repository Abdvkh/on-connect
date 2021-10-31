import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  hide = true;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    this.submitted = true;

    this.loading = true;

    this.authService
      .login(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate(['/']);
        },
        (error) => {
          this.error = error;
          this.loading = false;
        }
      );
  }
}
