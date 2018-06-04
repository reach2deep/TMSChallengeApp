import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent  {

  model: any = {};
  loading = false;

  constructor(
      private router: Router,
      private userService: UserService,
      private notif: NotificationsService) { }

  register() {
      this.loading = true;
      console.log(JSON.stringify(this.model));
      this.userService.create(this.model)
          .subscribe(
              data => {
                  this.showInfoMessage('Success', 'Registration successful');
                  this.router.navigate(['/login']);
              },
              error => {
                  if (error) {
                    if (error.status === 500) {
                      // Duplicate username
                      var test = error.error;
                      if ( test.indexOf('E11000 ') >= 0) {
                        this.showInfoMessage('Username already exists', 'Please try to login');
                      }
                    }
                  }else {
                  this.showErorMessage('Error', error);
                  this.loading = false;
                  }
              }
            );
  }

// Common Message Box methods
   showInfoMessage(title, message) {
    this.notif.info(
        title,
        message,
        {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: true,
          maxLength: 50
        }
      );
}
showWarnMessage(title, message) {
    this.notif.warn(
        title,
        message,
        {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: true,
          maxLength: 50
        }
      );
}
showErorMessage(title, message) {
    this.notif.error(
        title,
        message,
        {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: true,
          maxLength: 50
        }
      );
}
}
