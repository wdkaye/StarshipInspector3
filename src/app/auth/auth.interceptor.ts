import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('comp584wk');
  const router = inject(Router);

  req = req.clone({
    setHeaders:{
      Authorization:`Bearer ${token}`
    }
  });

  return next(req).pipe(
    catchError(error => {
      if( (error instanceof HttpErrorResponse) && (error.status == 401) )
      {
        router.navigate(["/login"]);
      }
      return throwError(() => error);
    })
  )
};