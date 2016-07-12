/**
 * Created by Amit.Mahida on 03-02-2016.
 */

import {Component, OnInit}   from 'angular2/core';
import {APIS} from '../../app.config';
import {ListIssueService}   from './listIssues.service';
import {CommonService} from '../../shared/common.functions';
import {ROUTER_DIRECTIVES, Router, RouteParams} from 'angular2/router';
import {PaginatePipe, PaginationControlsCmp, PaginationService,IPaginationInstance} from 'ng2-pagination';

@Component({
    templateUrl: 'app/components/listIssues/listIssues.html',
    directives: [ROUTER_DIRECTIVES, PaginationControlsCmp],
    pipes: [PaginatePipe],
    providers: [PaginationService, ListIssueService, CommonService]
})

export class listIssueComponent implements OnInit {

    constructor(private listIssueService:ListIssueService, private _router:Router) {

    }

    issuePage = {};
    public config: IPaginationInstance = {
        id: 'custom',
        itemsPerPage: 1,
        currentPage: 1
    };

    ngOnInit() {
        if (APIS.USER === "") {
            this._router.navigate(['Login']);
        }
        this.listIssues();
        //this.issuePage = Object.assign(this.issuePage, PAGINATE.CustomPagination);
        //console.log(this.issuePage);
    }

    currentIssues:any = [];

    listIssues() {
        let temp:any = [];
        this.listIssueService.listIssues().subscribe(res=> {
            res.forEach(function (val:any, key:any) {
                //console.log(val.createdOn);
                if (val["createdOn"]) {
                    var b:Date = new Date(val.createdOn);
                    val["createdOn"] = b;
                    //console.log(b);
                }
            });
            this.currentIssues = res;
        });
    }

    editIssue(issue:any) {
        this._router.navigate(['Edit', {id: issue._id}]);
    }

    deleteIssue(id:any) {

        var r = confirm("Are you sure want to delete issue?");
        if (r == true) {
            this.listIssueService.deleteIssue(id).subscribe(response=> {
                if (response.data.success === "true") {
                    this.listIssues();
                }
            });
            //$.toaster({ message : 'Your issue is deleted successfully!', title : 'Success', priority : 'success' });

        } else {
            //$.toaster({ message : 'Your issue is not deleted!', title : 'Info', priority : 'warning' });
        }

    }
}