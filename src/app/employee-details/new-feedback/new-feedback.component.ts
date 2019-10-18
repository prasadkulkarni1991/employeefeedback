import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FeedbackService } from 'src/app/http/feedback.service';

@Component({
    selector: 'app-new-feedback',
    templateUrl: './new-feedback.component.html'
})

export class NewFeedbackComponent implements OnInit {
    feedbackForm: FormGroup;
    empName: FormControl;
    empId: FormControl;
    project: FormControl;
    comment: FormControl;

    projectList;

    constructor(private fb: FormBuilder,
        private feedbackservice: FeedbackService) {

    }


    ngOnInit() {
        this.setFeedbackForm();
        this.projectList = [
            {
                name: 'demo 1',
            },
            {
                name: 'demo 2',
            },
            {
                name: 'demo 3',
            },

        ];
    }

    setFeedbackForm() {
        this.feedbackForm = this.fb.group({
            empName: ['', Validators.required],
            empId: ['', Validators.required],
            project: ['', Validators.required],
            rating: ['', Validators.required],
            comment: ['', Validators.required],
        });
    }

    submitFeedback(form) {
        const feedbackObj = {
            empName: form.controls['empName'].value,
            empId: form.controls['empId'].value,
            rating: form.controls['rating'].value,
            projectName: form.controls['project'].value,
            comment: form.controls['comment'].value,
        };
        this.feedbackservice.updatefeedbackList(feedbackObj);
    }

}
