import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Navigation } from '@angular/router';
import { TicketsComponent } from './components/tickets/tickets.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: ''
    },
    {
        path: 'tickets',
        component: TicketsComponent,
        title: ''
    },
    {
        path: 'signin',
        component: SigninComponent,
        title: ''
    },
    {
        path: 'signup',
        component: SignupComponent,
        title: ''
    },
    {
        path: '**',
        redirectTo: ''
    }

];
