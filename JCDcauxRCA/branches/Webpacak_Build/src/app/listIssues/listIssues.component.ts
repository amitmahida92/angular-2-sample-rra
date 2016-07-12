/**
 * Created by Amit.Mahida on 03-02-2016.
 */

import {Component, OnInit, AfterContentChecked}   from '@angular/core';
import {APIS} from '../app.config';
import {ListIssueService, ListIssue}   from './listIssues.service';
import {CommonService} from '../shared/common.functions';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {DataTable, Column, Button,
  InputText, Header, MenuItem, ContextMenu, Calendar
} from 'primeng/primeng';

@Component({
  templateUrl: './listIssues.html',
  directives: [ROUTER_DIRECTIVES, DataTable, Column,
    Button, InputText, Header, ContextMenu, Calendar],
  providers: [ListIssueService, CommonService]
})

export class ListIssueComponent implements OnInit {

  issuePage = {};
  currentIssues:ListIssue[];
  selectedIssue: ListIssue;
  items: MenuItem[];
  from:any;
  to:any;

  constructor(private listIssueService:ListIssueService, private _router:Router) {

  }

  ngOnInit() {
    this.items = [
      {label: 'View', icon: 'fa-edit', command: (event) => this.editIssue(this.selectedIssue)},
      {label: 'Delete', icon: 'fa-close', command: (event) => this.deleteIssue(this.selectedIssue)}
    ];


    if (APIS.USER === '') {
      this._router.navigate(['login']);
    } else {
      this.listIssues();
    }
  }

  listIssues() {
    let temp:any = [];
    this.listIssueService.listIssues().subscribe(res => {
      res.forEach(function (val:any, key:any) {
        if (val['createdOn']) {
          var b:Date = new Date(val.createdOn);
          val['createdOn'] = b;
        }
      });
      this.currentIssues = res;
    });
  }

  editIssue(id) {
    this._router.navigate(['add-issue', id]);
  }

  deleteIssue(id:any) {
    debugger
    var r = confirm('Are you sure want to delete issue?');
    if (r === true) {
      this.listIssueService.deleteIssue(id).subscribe(response => {
        if (response.data.success === 'true') {
          this.listIssues();
        }
      });
    }
  }

  searchOnDates(){
    console.log(this.from);
    console.log(this.to);
    this.listIssueService.searchIssues(this.from,this.to).subscribe(res=>{
      this.currentIssues = res;
    });
  }
}
