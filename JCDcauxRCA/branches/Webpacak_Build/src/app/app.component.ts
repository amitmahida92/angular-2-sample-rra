/**
 * Created by Amit.Mahida on 21-01-2016.
 */

import {Component, AfterViewInit} from '@angular/core';
import {APIS} from './app.config';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {LoginComponent} from './login/login.component';

declare var Modena:any;

@Component({
  selector: 'rca',
  templateUrl: './app.component.html',
  providers: [HTTP_PROVIDERS],
  directives: [ROUTER_DIRECTIVES, LoginComponent]
})

export class AppComponent implements AfterViewInit {

  authenticated:boolean = true;

  ngAfterViewInit() {
    Modena.init();
  }

  constructor(private _router:Router) {
  }

  redirectToAdd() {
    this._router.navigate(['add-issue']);
  }

  checkLogin(option:any) {
    if (APIS.USER === '' || option === 'false') {
      this.authenticated = false;
      console.log('Not Logged In ' + APIS.USER + ';' + this.authenticated);
    } else {
      this.authenticated = true;
      console.log('Logged In ' + APIS.USER + ';' + this.authenticated);
    }
  }
}
