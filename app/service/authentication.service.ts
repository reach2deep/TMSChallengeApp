import { Api } from './api';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {
    constructor(private api: Api) { }

    // TO AUTHENTICATE
    login(username: string, password: string) {
        return this.api.post('auth/login', { username: username, password: password })
            .pipe(user => {
                return user;
            });
    }

    // TO LOGOUT & CLEAR STORE
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
    }
}
