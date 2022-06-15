import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class BasicInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // request = request.clone({
    //   setHeaders: {
    //     'Content-Type': 'application/json; charset=utf-8',
    //     Accept: 'application/json',
    //     Authorization: `Bearer ${localStorage.getItem('customToken') || ''}`
    //   }
    // });

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        if (error.status >= 500 && error.status < 600) {
          return throwError(() => new Error('El servidor está caído en estos momentos, disculpe las molestias'));
        }

        return throwError(() => new Error(error.message));
      })
    );
  }
}
