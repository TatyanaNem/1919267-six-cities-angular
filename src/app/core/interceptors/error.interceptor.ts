import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { JWTService } from '../services/jwt.service';
import { ToastrService } from 'ngx-toastr';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const jwtService = inject(JWTService);
  const toastr = inject(ToastrService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let message = '';

      switch (error.status) {
        case 401: // Not Authorized
          jwtService.dropToken();
          message = 'Вы не авторизованы!';
          break;

        case 403: // Forbidden
          message = 'Нет доступа к данному ресурсу.';
          break;

        case 404: // Resource not found
          message = 'Запрашиваемый ресурс не найден.';
          break;

        case 500: // Internal Server Error
          message = 'Произошла внутренняя ошибка сервера.';
          break;

        default:
          message = `Что-то пошло не так! Код ошибки ${error.status}.`;
      }

      toastr.error(message);
      return throwError(() => error);
    })
  );
};
