import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { JWTService } from '../services/jwt.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(JWTService).getToken();

  const authReq = req.clone({
    headers: req.headers.set('Authorization', token),
  });

  return next(authReq);
};
