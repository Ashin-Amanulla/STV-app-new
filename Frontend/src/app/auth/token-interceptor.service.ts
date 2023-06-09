import { Injectable, Injector } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpInterceptor } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }


  intercept(req: any, nxt: any) {
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone(
      {
        setHeaders: {
          Authorization: `Bearer ${authService.getToken()}`
        }
      }
    )
    return nxt.handle(tokenizedReq)

  }


}
