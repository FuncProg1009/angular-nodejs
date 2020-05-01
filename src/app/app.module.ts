import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'; // inport thêm HTTP_INTERCEPTORS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import {AuthService} from './service/auth.service';
import {AuthGuard} from './guard-auth/auth.guard';
//  import thêm TokenInterceptorService

import {TokenInterceptorService } from './token/token-interceptor.service';
import { UserViewComponent } from './user-view/user-view.component';
import { UserHeaderComponent } from './user-view/user-header/user-header.component';
import { UserFooterComponent } from './user-view/user-footer/user-footer.component';
import { UserHomeComponent } from './user-view/user-home/user-home.component';
import { UserAboutComponent } from './user-view/user-about/user-about.component';
import { UserContactComponent } from './user-view/user-contact/user-contact.component';
import { UserProductsComponent } from './user-view/user-products/user-products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDetailComponent } from './user-view/user-detail/user-detail.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminHeaderComponent } from './admin-view/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-view/admin-footer/admin-footer.component';
import { AdminManagerComponent } from './admin-view/admin-manager/admin-manager.component';
import { AdminInsertComponent } from './admin-view/admin-insert/admin-insert.component';
import { AdminUpdateComponent } from './admin-view/admin-update/admin-update.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    UserViewComponent,
    UserHeaderComponent,
    UserFooterComponent,
    UserHomeComponent,
    UserAboutComponent,
    UserContactComponent,
    UserProductsComponent,
    UserDetailComponent,
    AdminViewComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminManagerComponent,
    AdminInsertComponent,
    AdminUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    AuthService, AuthGuard,
    {
      // tạo thêm object sau khi import TokenInterceptorService
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService, // sử dụng class TokenInterceptorService
      multi: true  // đặt là true nếu muốn chặn nhiều http
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
