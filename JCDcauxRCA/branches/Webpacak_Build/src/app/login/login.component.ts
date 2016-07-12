/**
 * Created by Amit.Mahida on 21-01-2016.
 */

import {Component, OnInit}   from '@angular/core';
import {Login, LoginService}   from './login.service';
import {Router} from '@angular/router';
import {NgForm}    from '@angular/common';
import {APIS} from '../app.config';
import {CommonService} from '../shared/common.functions';
import {InputText} from 'primeng/components/InputText/InputText';
import {Password} from 'primeng/components/Password/Password';


@Component({
  templateUrl: './login.html',
  providers: [LoginService, CommonService],
  directives: [InputText, Password, NgForm]
})

export class LoginComponent {
  loginError = false;
  userDetails = new Login('', '');

  constructor(private _LoginService:LoginService, private _router:Router) {
    this.userDetails.username = "amit.mahida";
    this.userDetails.password = "mangi.89057/";
  }

  authenticate() {

    this.userDetails.username = this.userDetails.username.toLowerCase();

    APIS.USER = this.userDetails.username;

    var params = this.userDetails;
    this._LoginService.authenticate(params).subscribe(response => {
      if (response.data.auth === 'true') {
        this._router.navigate(['list-issues']);
      } else {
        this._router.navigate(['login']);
        this.loginError = true;
      }
    });
  }

  onCancel() {
    this.userDetails = new Login('', '');
  }
}
