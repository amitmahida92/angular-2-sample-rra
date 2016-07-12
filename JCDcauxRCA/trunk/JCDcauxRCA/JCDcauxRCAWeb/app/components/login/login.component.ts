/**
 * Created by Amit.Mahida on 21-01-2016.
 */

import {Component, OnInit}   from 'angular2/core';
import {Login, LoginService}   from './login.service';
import {Router, RouteParams} from 'angular2/router';
import {NgForm}    from 'angular2/common';
import {APIS} from "../../app.config";
import {CommonService} from '../../shared/common.functions';

@Component({
    templateUrl: 'app/components/login/login.html',
    providers: [LoginService, CommonService]
})

export class loginComponent {

    constructor(private _LoginService:LoginService, private _router:Router) {
    }

    userDetails = new Login('', '');
    loginError = false;

    authenticate() {

        this.userDetails.username = this.userDetails.username.toLowerCase();

        APIS.USER = this.userDetails.username;

        var params = this.userDetails;
        this._LoginService.authenticate(params).subscribe(response=> {
            if (response.data.auth === 'true') {
                this._router.navigate(['List']);
            } else {
                this._router.navigate(['Login']);
                this.loginError = true;
            }
        });
    }

    onCancel() {
        this.userDetails = new Login('', '');
    }
}