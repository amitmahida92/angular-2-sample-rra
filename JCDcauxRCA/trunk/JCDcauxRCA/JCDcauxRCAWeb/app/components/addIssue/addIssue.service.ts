/**
 * Created by Amit.Mahida on 21-01-2016.
 */

import {APIS} from '../../app.config';
import {Injectable} from 'angular2/core';
import {Http, Request, RequestMethod, Headers} from 'angular2/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {CommonService} from '../../shared/common.functions';

export class AddIssue {
    constructor(public employeeName:string,
                public projectName?:string,
                public jiraNumber?:number,
                public issueType?:string,
                public RCAType?:string,
                public comments?:string,
                public createdOn?:any,
                public createdBy?:string,
                public jiraUrl?:string) {
    }
}

@Injectable()
export class AddIssueService {
    constructor(private http:Http, private commonService:CommonService) {
    }

    addIssues(params:any) {

        let firstHeaders = new Headers();
        firstHeaders.append('Content-Type', 'text/plain;charset=UTF-8');

        return this.http.request(new Request({
            method: APIS.HTTP_METHODS.POST,
            url: APIS.ADD_ISSUE,
            search: this.commonService.serializeObj(params)
        })).map(res => res.json());
    }

    getIssue(id:any){
        return this.http.request(new Request({
            method: APIS.HTTP_METHODS.GET,
            url: APIS.GET_ISSUE + id
        })).map(res => res.json());
    }

    updateIssue(params:any) {

        let firstHeaders = new Headers();
        firstHeaders.append('Content-Type', 'text/plain;charset=UTF-8');

        return this.http.request(new Request({
            method: APIS.HTTP_METHODS.POST,
            url: APIS.UPDATE_ISSUE,
            search: this.commonService.serializeObj(params)
        })).map(res => res.json());
    }

}