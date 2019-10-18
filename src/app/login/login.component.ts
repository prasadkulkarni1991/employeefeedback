import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../http/login.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
    loginDetails;
    loginForm: FormGroup;
    userName: FormControl;
    password: FormControl;
    role: FormControl;
    constructor(
        private router: Router,
        private fb: FormBuilder,
        private service: LoginService,
    ) { }

    ngOnInit() {
        this.loginForm = this.fb.group({
            userName: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    login(form) {
        const data = {
            password: form.controls['password'].value,
            userName: form.controls['userName'].value,
        };

        sessionStorage.setItem('userDetails', JSON.stringify(data));
        this.router.navigate(['/feedback']);
    }

    setSessionStorage(res) {
        const userDetails = {
            email: res.data.email
        };
        localStorage.setItem('userDetails', JSON.stringify(res.data));
        localStorage.setItem('userId', JSON.stringify(res.data.id));
        localStorage.setItem('token', JSON.stringify(res.token));
    }

}
