import { Component } from '@angular/core';
import { LayoutComponent } from '../../../layout/layout/layout.component';
import { LoginFormComponent } from '../../../../features/login-form/login-form.component';

@Component({
  selector: 'app-login-page',
  imports: [LayoutComponent, LoginFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {}
