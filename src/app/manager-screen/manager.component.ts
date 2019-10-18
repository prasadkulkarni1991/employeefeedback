import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../http/feedback.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-manager-screen',
    templateUrl: './manager.component.html'
})

export class ManagerScreenComponent implements OnInit {

    mgrfeedbackList;
    editFormvalue: FormGroup;
    constructor(private feedbackService: FeedbackService) { }

    ngOnInit() {
        this.mgrfeedbackList = this.feedbackService.getFeedbackList();
        this.setForm();
    }

    setForm(data?) {
        this.editFormvalue = new FormGroup({
            mgrComment: new FormControl(
                data ? data.mgrComment : ''
            ),
            mgrRating: new FormControl(
                data ? data.mgrRating : ''
            )
        });
    }

    confirmDelete(index) {
        this.mgrfeedbackList.splice(index, 1);
    }

    updateRow(index) {
        this.mgrfeedbackList[index].isedit = true;
        this.setForm(this.mgrfeedbackList[index]);
    }

    saveRow(form, index) {
        this.mgrfeedbackList[index].mgrComment = form.controls['mgrComment'].value;
        this.mgrfeedbackList[index].mgrRating = form.controls['mgrRating'].value;
        this.mgrfeedbackList[index].isedit = false;
    }

}
