import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/http/feedback.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-feedback-list',
    templateUrl: './feedback-list.component.html'
})

export class FeedbackListComponent implements OnInit {
    feedbackList;
    ownFeedbackForm: FormGroup;

    projectList;

    constructor(private feedbackService: FeedbackService) {

    }
    ngOnInit() {
        this.feedbackList = this.feedbackService.getFeedbackList();
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
        this.setForm();
    }

    setForm(data?) {
        this.ownFeedbackForm = new FormGroup({
            projectName: new FormControl(
                data ? data.projectName : ''
            ),
            rating: new FormControl(
                data ? data.rating : ''
            ),
            comment: new FormControl(
                data ? data.comment : ''
            )
        });
    }

    editOwnFeedback(index) {
        this.feedbackList[index].isedit = true;
        this.setForm(this.feedbackList[index]);
    }

    saveRow(form, index) {
        this.feedbackList[index].projectName = form.controls['projectName'].value;
        this.feedbackList[index].rating = form.controls['rating'].value;
        this.feedbackList[index].comment = form.controls['comment'].value;
        this.feedbackList[index].isedit = false;
    }

    deleteOwnFeedback(index) {
        this.feedbackList.splice(index, 1);
    }

}
