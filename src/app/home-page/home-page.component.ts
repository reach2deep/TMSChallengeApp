import { NotificationsService } from 'angular2-notifications';
import { User } from './../model/User';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
  currentUserId: any;
  loading = false;

  constructor(private route: ActivatedRoute,
               private notif: NotificationsService,
              private userService: UserService,
              private authenticationService: AuthenticationService,
              private userDetail: User) {

      // GET THE USER ID FROM THE LOCAL STORE
      this.currentUserId = JSON.parse(localStorage.getItem('userId'));
  }

  ngOnInit() {

    // CALL USER DETAILS AFTER INIT
    this.getUserDetail(this.currentUserId);
  }

  // TO GET THE CURRENT USER DETAILS
  getUserDetail(userId) {
    this.loading = true;
    this.userService.getById(userId)
        .subscribe(
            (res: any) => {
                if (res.success === true) {
                  this.userDetail = new User();
                  this.userDetail.setId(res.data._id);
                  this.userDetail.setFirstName(res.data.firstName);
                   this.userDetail.setLastName(res.data.lastName);
                   this.userDetail.setPhoneNumber(res.data.phoneNumber);
                   this.userDetail.setUsername(res.data.username);
                   this.userDetail.setPassword(res.data.password);
                    this.showInfoMessage('Success', 'Logged in Succesfully');

                    this.loading = false;
                } else {
                    this.showWarnMessage('Error', 'Unable to load user details');
                    this.loading = false;
                }
            },
            error => {
              this.showErorMessage('Error', 'Unable to load user details');

            });

}

// TO UPDATE USER DETAILS
update() {
  this.loading = true;
  console.log(JSON.stringify(this.userDetail));
  this.userService.update(this.userDetail)
      .subscribe(
          data => {
              this.showInfoMessage('Success', 'Details Updated');
              this.loading = false;
          },
          error => {
              if (error) {
                if (error.status === 500) {
                  this.showErorMessage('Error', 'Unable to Update the details');
                  this.loading = false;
                }
              } else {
                this.showErorMessage('Error', 'Unable to Update the details');
                this.loading = false;
              }
          });

}

// common message box methods.
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
