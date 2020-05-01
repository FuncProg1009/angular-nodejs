import { Injectable ,Injector} from '@angular/core'; // Sử dụng inject của angular (Injector)
import { HttpInterceptor } from "@angular/common/http";
import { AuthService } from "../service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injecter: Injector) { }

  intercept(req,next) {
    let authService = this.injecter.get(AuthService); //lấy AuthService theo kiểu này sẽ không bị chặn
    let tokenizReq = req.clone({
      setHeaders: {
          Authorization: `Bearer ${authService.getToken()}`
      }
    })
      return next.handle(tokenizReq);
  }
}
