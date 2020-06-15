import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HTTP_INTERCEPTORS
  } from '@angular/common/http';
    
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
  
  @Injectable()
  export class ErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      //console.log("passou");
      return next
        .handle(request)
        .catch((error,caught) => {
            let errorObj = error;
            // o objeto Error possui o campo "error"?
            if(errorObj.error){
                errorObj = errorObj.error;
            }

            // Verifica se poosui o campo status. Se não, não é json.
            if(!errorObj.status){
                errorObj = JSON.parse(errorObj);
            }

            console.log("Erro detectado pelo interceptor.");
            console.log(errorObj);

            return Observable.throw(errorObj);
        }) as any;
    }
  }

  export const ErrorInterceptorProvider = {
    provide : HTTP_INTERCEPTORS,
    useClass : ErrorInterceptor,
    multi : true
  }