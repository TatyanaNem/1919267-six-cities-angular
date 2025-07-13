import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { JWTService } from '../services/jwt.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const jwtService = inject(JWTService);
  const toastr = inject(ToastrService);
  const router = inject(Router);
  const isMainRoute = router.url === '/';

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let message = '';

      switch (error.status) {
        case 401:
          jwtService.dropToken();
          if (!isMainRoute) {
            message = 'You are not authorized to access this resource.';
            toastr.error(message);
          }
          break;

        case 403:
          message = 'You are forbidden to access this resource.';
          toastr.error(message);
          break;

        case 404:
          message = 'The requested resource was not found.';
          toastr.error(message);
          break;

        case 500:
          message = 'Internal Server Error has occurred.';
          toastr.error(message);
          break;

        default:
          message = `Something went wrong! Error code is ${error.status}.`;
          toastr.error(message);
      }
      return throwError(() => error);
    })
  );
};
