import { Api } from './api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';

@Injectable()
export class UserService {
    constructor(public api: Api) { }

    // GET USER DETAIL BY ID
    getById(id: any) {
        return this.api.get('user/' + id);
    }

    // REGISTER NEW USER
    create(user: User) {
        return this.api.post('user/register/', user);
    }

    // UPDATE USER DETAIL BY ID
    update(user: User) {
        return this.api.put('user/' + user.id, user);
    }
}
