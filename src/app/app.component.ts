import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from './core/models/user.model';
import { AuthService } from './core/services/auth.service';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: User | undefined;

  constructor(private router: Router, private authenticationService: AuthService) {
    this.authenticationService.currentUser$.subscribe((x) => (this.currentUser = x));
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
