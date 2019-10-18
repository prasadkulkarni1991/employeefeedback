import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class LoginService {
    constructor(private http: HttpClient) { }
    userData: any;
    userLogin(data) {
        return true;
    }

    getUserDetails() {
        return this.userData;
    }
}
