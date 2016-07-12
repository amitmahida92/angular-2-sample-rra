/**
 * Created by Amit.Mahida on 21-01-2016.
 */

import {Component, OnInit}   from 'angular2/core';
import {AddIssue, AddIssueService}   from './addIssue.service';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {APIS} from '../../app.config';
import {NgForm}    from 'angular2/common';
import {CommonService} from '../../shared/common.functions';

@Component({
    templateUrl: 'app/components/addIssue/addIssue.html',
    providers: [AddIssueService, CommonService],
    directives: [ROUTER_DIRECTIVES]
})

export class addIssueComponent {
    form_label = "";
    submit_label = "";

    constructor(private _AddIssueService:AddIssueService, private _router:Router, private _routeParams:RouteParams) {

        if(APIS.USER === ""){
            this._router.navigate(['Login']);
        }

        if(!("id" in  _routeParams.params)){
            this.form_label = "ADD ISSUE";
            this.submit_label = "ADD";
        }else {
            var id = _routeParams.params["id"];
            _AddIssueService.getIssue(id).subscribe(res=>{
                var date = new Date(res[0]["createdOn"]);
                res[0]["createdOn"] = (date.getFullYear()+'-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-'+("0" + (date.getDate())).slice(-2));
                this.issues = res[0];
            });
            this.form_label = "EDIT ISSUE";
            this.submit_label = "UPDATE";
        }

    }

    issueTypes =  APIS.OPTIONS.ISSUES_TYPES.sort();
    rcaTypes = APIS.OPTIONS.RCA_TYPES.sort();
    authenticated = false;
    issues = new AddIssue(APIS.USER);

    addNewIssue() {
        var params = this.issues;
        this._AddIssueService.addIssues(params).subscribe(response=> {
            if (response.data.auth === "true") {
                this._router.navigate(['List']);
            } else {
                this.authenticated = true;
            }
        });
    }

    updateIssue(){
        var params = this.issues;
        this._AddIssueService.updateIssue(params).subscribe(response=>{
            if (response.data.success === "true") {
                this._router.navigate(['List']);
            } else {
                this.authenticated = true;
            }
        });
    }
}