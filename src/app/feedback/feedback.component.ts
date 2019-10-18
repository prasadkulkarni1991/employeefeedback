import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.css']
})

export class FeedbackComponent implements OnInit {
    userDetails;
    employeeRadio = false;
    managerRadio = false;
    constructor(private route: Router) {
        this.route.events.subscribe(rout => {
            if (rout instanceof NavigationEnd) {

                if (rout.urlAfterRedirects === '/feedback/employee-details') {
                    this.employeeRadio = true;
                }
                if (rout.urlAfterRedirects === '/feedback/manager-review') {
                    this.managerRadio = true;
                }
            } else {
                this.employeeRadio = true;
            }
        });
    }

    ngOnInit() {
        this.userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
    }

}
