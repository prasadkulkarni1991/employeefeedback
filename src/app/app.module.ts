import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.component';
import { LoginService } from './http/login.service';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NewFeedbackComponent } from './employee-details/new-feedback/new-feedback.component';
import { FeedbackListComponent } from './employee-details/feedback-list/feedback-list.component';
import { FeedbackService } from './http/feedback.service';
import { ManagerScreenComponent } from './manager-screen/manager.component';
import { DeleteFeedbackComponent } from './delete-feedback/delete-feedback.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { OrderByPipe } from './sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeDetailsComponent,
    NewFeedbackComponent,
    FeedbackListComponent,
    ManagerScreenComponent,
    DeleteFeedbackComponent,
    FeedbackComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [
    LoginService,
    FeedbackService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DeleteFeedbackComponent
  ]
})
export class AppModule { }
