/**
 * Created by Amit.Mahida on 21-01-2016.
 */

import {Component, OnInit}   from '@angular/core';
import {AddIssue, AddIssueService}   from './addIssue.service';
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';
import {APIS} from '../app.config';
import {NgForm}    from '@angular/common';
import {CommonService} from '../shared/common.functions';
import {InputText, Panel, Dropdown, Button} from 'primeng/primeng';

@Component({
  templateUrl: './addIssue.html',
  providers: [AddIssueService, CommonService],
  directives: [ROUTER_DIRECTIVES, NgForm, InputText, Panel, Dropdown, Button]
})

export class AddIssueComponent implements OnInit {
  formLabel = '';
  submitLabel = '';
  issueTypes = APIS.OPTIONS.ISSUES_TYPES.sort();
  rcaTypes = APIS.OPTIONS.RCA_TYPES.sort();
  authenticated = false;
  issues = new AddIssue(APIS.USER);
  _routeParams:any;

  constructor(private _AddIssueService:AddIssueService,
              private _router:Router,
              private _route:ActivatedRoute) {

    if (APIS.USER === '') {
      this._router.navigate(['Login']);
    }

    // if (!('id' in _routeParams.params)) {
    //     this.formLabel = 'ADD ISSUE';
    //     this.submitLabel = 'ADD';
    // } else {
    //
    // }
  }

  ngOnInit() {

    this._routeParams = this._route.params.subscribe(params => {
      let id = params['id']; // (+) converts string 'id' to a number

      if (id) {
        this._AddIssueService.getIssue(id).subscribe(res => {
          let date = new Date(res[0]['createdOn']);
          res[0]['createdOn'] = (date.getFullYear() + '-'
          + ('0' + (date.getMonth() + 1)).slice(-2) +
          '-' + ('0' + (date.getDate())).slice(-2));
          this.issues = res[0];
        });
        this.formLabel = 'EDIT ISSUE';
        this.submitLabel = 'UPDATE';

      } else {
        this.formLabel = 'ADD ISSUE';
        this.submitLabel = 'ADD';
      }

    });
  }

  addNewIssue() {
    if (typeof this.issues.comments == "undefined") {
      this.issues.comments = " - ";
    }
    this.issues.recordCreatedOn = Date();
    let params = this.issues;
    this._AddIssueService.addIssues(params).subscribe(response => {
      if (response.data.auth === 'true') {
        this._router.navigate(['list-issues']);
      } else {
        this.authenticated = true;
      }
    });
  }

  updateIssue() {
    let params = this.issues;
    this._AddIssueService.updateIssue(params).subscribe(response => {
      if (response.data.success === 'true') {
        this._router.navigate(['list-issues']);
      } else {
        this.authenticated = true;
      }
    });
  }

  redirectToList() {
    this._router.navigate(['list-issues']);
  }
}
