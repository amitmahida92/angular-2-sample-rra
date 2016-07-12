/**
 * Created by Amit.Mahida on 21-01-2016.
 */

import {Component} from 'angular2/core';
import {APIS} from './app.config';
import {RouteConfig, ROUTER_DIRECTIVES, Router, RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

//Components at init
import {loginComponent} from "./components/login/login.component";
import {addIssueComponent} from "./components/addIssue/addIssue.component";
import {listIssueComponent} from "./components/listIssues/listIssues.component";

@Component({
    selector: 'rca',
    templateUrl: 'app/init.html',
    providers: [HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES, loginComponent]
})

@RouteConfig([
    {path: '/', name: 'Login', component: loginComponent,useAsDefault: true},
    {path: '/add-issue', name: 'Add', component: addIssueComponent},
    {path: '/add-issue/:id', name: 'Edit', component: addIssueComponent},
    {path: '/list-issues', name: 'List', component: listIssueComponent},
    {path: '/*path', redirectTo: ['Login']}
])

export class AppComponent {

    authenticated:boolean = true;

    constructor() {
    }

    checkLogin(option:any) {
        if (APIS.USER === "" || option === 'false') {
            this.authenticated = false;
            console.log('Not Logged In ' + APIS.USER + ";" + this.authenticated);
        } else {
            this.authenticated = true;
            console.log('Logged In ' + APIS.USER + "; " + this.authenticated);
        }
    }
}