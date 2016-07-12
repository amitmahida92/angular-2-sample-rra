/**
 * Created by Amit.Mahida on 03-02-2016.
 */

import {APIS} from '../app.config';
import {Injectable} from '@angular/core';
import {Http, Request, RequestMethod, Headers} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {CommonService} from '../shared/common.functions';

export class ListIssue {
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
export class ListIssueService {

  constructor(private http:Http, private commonService:CommonService) {
    this.listIssues();
  }

  listIssues() {
    let firstHeaders = new Headers();
    firstHeaders.append('Content-Type', 'text/plain;charset=UTF-8');

    return this.http.request(new Request({
      method: APIS.HTTP_METHODS.GET,
      url: APIS.LIST_ISSUES + APIS.USER
    })).map(res => res.json());
  }

  deleteIssue(id) {
    let firstHeaders = new Headers();
    firstHeaders.append('Content-Type', 'text/plain;charset=UTF-8');

    return this.http.request(new Request({
      method: APIS.HTTP_METHODS.GET,
      url: APIS.DELETE_ISSUE + id
    })).map(res => res.json());
  }

  searchIssues(fromDate, toDate) {
    let firstHeaders = new Headers();
    firstHeaders.append('Content-Type', 'text/plain;charset=UTF-8');

    var params = {
      fromDate: fromDate,
      toDate: toDate,
    };

    return this.http.request(new Request({
      method: APIS.HTTP_METHODS.GET,
      url: APIS.SEARCH_ON_DATES,
      search: this.commonService.serializeObj(params)
    })).map(res => res.json());
  }
}
