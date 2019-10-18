import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ManagerScreenComponent } from './manager-screen/manager.component';
import { FeedbackComponent } from './feedback/feedback.component';

export const route: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'feedback',
        component: FeedbackComponent,
        children: [
            {
                path: '',
                redirectTo: 'employee-details',
                pathMatch: 'full'

            },
            {
                path: 'employee-details',
                component: EmployeeDetailsComponent
            },
            {
                path: 'manager-review',
                component: ManagerScreenComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}

