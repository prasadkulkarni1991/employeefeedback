import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';

@Injectable()
export class FeedbackService {

    feedback = [
        {
            'empId': '1000',
            'empName': 'Prasad',
            'projectName': 'Demo 2',
            'rating': 4,
            'comment': 'nice',
            'mgrComment': 'good work',
            'mgrRating': 5
        },
        {
            'empId': '1001',
            'empName': 'Kunal',
            'projectName': 'Demo 3',
            'rating': 4,
            'comment': 'nice',
            'mgrComment': 'good work',
            'mgrRating': 5
        }, {
            'empId': '1002',
            'empName': 'Raj',
            'projectName': 'Demo 1',
            'rating': 4,
            'comment': 'nice',
            'mgrComment': '',
            'mgrRating': ''
        }];
    constructor(private http: HttpClient) { }
    userData: any;
    updateFeedback = new Subject<any>();
    getFeedbackList() {

        return this.feedback;
    }

    updatefeedbackList(feedback) {
        this.feedback.unshift(feedback);
    }

    getNewFeedback() {
        return this.updateFeedback.asObservable();
    }


}
