import { UserService } from './../service/user.service';
import { NotificationsService } from 'angular2-notifications';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private notif: NotificationsService,
        private userService: UserService,
        private authenticationService: AuthenticationService,
      ) { }

    ngOnInit() {

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // TO AUTHENTICATE
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.login, this.model.password)
            .subscribe(
                (data: any) => {
                    if (data.success === true) {
                        // STORE JWT TOKEN & USER ID
                        localStorage.setItem('token', JSON.stringify(data.token));
                        localStorage.setItem('userId', JSON.stringify(data.data));
                        this.router.navigate([this.returnUrl]);
                        this.loading = false;
                    } else {
                        this.showWarnMessage('Invalid Credentials', 'Enter valid username and password');
                        this.loading = false;
                    }
                },
                error => {
                    this.showErorMessage('Invalid Credentials', 'Enter valid username and password');
                    this.loading = false;
                });
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
