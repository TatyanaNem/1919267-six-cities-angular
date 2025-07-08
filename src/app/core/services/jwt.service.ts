import { Injectable } from '@angular/core';

type Token = string;

const AUTH_TOKEN_NAME = 'six-cities-token';

@Injectable({
  providedIn: 'root',
})
export class JWTService {
  getToken = (): Token => {
    const token = localStorage.getItem(AUTH_TOKEN_NAME);
    return token ?? '';
  };

  setToken = (token: Token): void => {
    localStorage.setItem(AUTH_TOKEN_NAME, token);
  };

  dropToken = (): void => {
    localStorage.removeItem(AUTH_TOKEN_NAME);
  };
}
