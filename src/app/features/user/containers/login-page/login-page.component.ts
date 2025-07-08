import { Component } from '@angular/core';
import { LayoutComponent } from '@app/core/layout';
import { LoginFormComponent } from '@app/features/user/components';

@Component({
  selector: 'app-login-page',
  imports: [LayoutComponent, LoginFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {}
