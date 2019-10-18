import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee-details.component.html',
    styleUrls: ['employee-details.component.css']
})

export class EmployeeDetailsComponent implements OnInit {
    newFeedback = false;
    feedbackList = false;
    employeeRadio;
    managerRadio;
    constructor(private route: Router) {

    }

    ngOnInit() {
        this.newFeedback = true;
    }
    openTab(tabName) {
        if (tabName === 'list') {
            this.newFeedback = false;
            this.feedbackList = true;
        }
        if (tabName === 'new') {
            this.feedbackList = false;
            this.newFeedback = true;
        }
    }

}
