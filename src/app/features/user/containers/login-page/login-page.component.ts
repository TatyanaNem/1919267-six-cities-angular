import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '@app/core/layout';
import { LoginFormComponent } from '@app/features/user/components';
import { AuthService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [LayoutComponent, LoginFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.isUserAuthenticated()) {
      this.router.navigate(['/']);
    }
  }
}
