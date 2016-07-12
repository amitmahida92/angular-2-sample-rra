/**
 * Created by Amit.Mahida on 03-02-2016.
 */
System.register(['../../app.config', 'angular2/core', 'angular2/http', 'rxjs/add/operator/map', '../../shared/common.functions'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var app_config_1, core_1, http_1, common_functions_1;
    var ListIssue, ListIssueService;
    return {
        setters:[
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (common_functions_1_1) {
                common_functions_1 = common_functions_1_1;
            }],
        execute: function() {
            ListIssue = (function () {
                function ListIssue(employeeName, projectName, jiraNumber, issueType, RCAType, comments, createdOn, createdBy, jiraUrl) {
                    this.employeeName = employeeName;
                    this.projectName = projectName;
                    this.jiraNumber = jiraNumber;
                    this.issueType = issueType;
                    this.RCAType = RCAType;
                    this.comments = comments;
                    this.createdOn = createdOn;
                    this.createdBy = createdBy;
                    this.jiraUrl = jiraUrl;
                }
                return ListIssue;
            }());
            exports_1("ListIssue", ListIssue);
            ListIssueService = (function () {
                function ListIssueService(http, commonService) {
                    this.http = http;
                    this.commonService = commonService;
                    this.listIssues();
                }
                ListIssueService.prototype.listIssues = function () {
                    var firstHeaders = new http_1.Headers();
                    firstHeaders.append('Content-Type', 'text/plain;charset=UTF-8');
                    return this.http.request(new http_1.Request({
                        method: app_config_1.APIS.HTTP_METHODS.GET,
                        url: app_config_1.APIS.LIST_ISSUES + app_config_1.APIS.USER
                    })).map(function (res) { return res.json(); });
                };
                ListIssueService.prototype.deleteIssue = function (id) {
                    var firstHeaders = new http_1.Headers();
                    firstHeaders.append('Content-Type', 'text/plain;charset=UTF-8');
                    return this.http.request(new http_1.Request({
                        method: app_config_1.APIS.HTTP_METHODS.GET,
                        url: app_config_1.APIS.DELETE_ISSUE + id
                    })).map(function (res) { return res.json(); });
                };
                ListIssueService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, common_functions_1.CommonService])
                ], ListIssueService);
                return ListIssueService;
            }());
            exports_1("ListIssueService", ListIssueService);
        }
    }
});
//# sourceMappingURL=listIssues.service.js.map