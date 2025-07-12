import { HttpInterceptorFn, HttpStatusCode } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { JWTService } from '../services/jwt.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const jwtService = inject(JWTService);

  return next(req).pipe(
    catchError((error) => {
      if (error.status === HttpStatusCode.Unauthorized) {
        jwtService.dropToken();
      }
      console.log(error.error.message);
      return throwError(() => error);
    })
  );
};
