import { Api } from './service/api';
import { HomePageComponent } from './home-page/home-page.component';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './core/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
import { UserService } from './service/user.service';
import { AuthenticationService } from './service/authentication.service';
import { User } from './model/User';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    routing,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    Api,
    AuthGuard,
    AuthenticationService,
    UserService,
        User

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
