/**
 * Created by Amit.Mahida on 21-01-2016.
 */

import { APIS } from '../app.config';
import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CommonService } from '../shared/common.functions';

export class Login {
    constructor(public username: string,
        public password: string) {
    }
}

@Injectable()
export class LoginService {

    constructor(private http: Http, private commonService: CommonService) {
    }

    authenticate(params) {

        let loginHeaders = new Headers();
        loginHeaders.append('Content-Type', 'text/plain;charset=UTF-8');

        return this.http.request(new Request({
            method: APIS.HTTP_METHODS.GET,
            headers: loginHeaders,
            url: APIS.AUTH_USER,
            search: this.commonService.serializeObj(params)
        })).map(res => res.json());
    }
}