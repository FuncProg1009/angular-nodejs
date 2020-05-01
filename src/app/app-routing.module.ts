import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import {SpecialEventsComponent} from './special-events/special-events.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './guard-auth/auth.guard';
import {UserViewComponent} from './user-view/user-view.component';
import {UserHomeComponent} from './user-view/user-home/user-home.component';
import {UserAboutComponent} from './user-view/user-about/user-about.component';
import {UserContactComponent} from './user-view/user-contact/user-contact.component';
import {UserProductsComponent} from './user-view/user-products/user-products.component';
import {UserDetailComponent} from './user-view/user-detail/user-detail.component';
import {AdminViewComponent} from './admin-view/admin-view.component';
import {AdminManagerComponent} from './admin-view/admin-manager/admin-manager.component';
import {AdminInsertComponent} from './admin-view/admin-insert/admin-insert.component';
import {AdminUpdateComponent} from './admin-view/admin-update/admin-update.component';

const routes: Routes = [
  {
    path: '',
    component: UserViewComponent,
    children: [
      { path: '', component: UserHomeComponent, pathMatch: 'full'},
      { path: 'about', component: UserAboutComponent},
      { path: 'products', component: UserProductsComponent},
      { path: 'contact', component: UserContactComponent},
      { path: 'detail/:id', component: UserDetailComponent},
    ]
  },
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  },
  // {
  //     path: 'events',
  //     component: EventsComponent
  // },
  {
      path: 'manager',
      component: AdminViewComponent,
    children: [
      { path: '', component: AdminManagerComponent, pathMatch: 'full'},
      { path: 'insert', component: AdminInsertComponent},
      { path: 'update/:id', component: AdminUpdateComponent},
    ]
      // canActivate: [AuthGuard]
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
