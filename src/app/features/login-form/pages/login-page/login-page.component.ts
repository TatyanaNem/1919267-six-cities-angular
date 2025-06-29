import { LayoutComponent } from './../../../../core/layout/layout/layout.component';
import { Component } from '@angular/core';
import { LoginFormComponent } from '../../../../features/login-form/login-form.component';

@Component({
  selector: 'app-login-page',
  imports: [LayoutComponent, LoginFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {}
