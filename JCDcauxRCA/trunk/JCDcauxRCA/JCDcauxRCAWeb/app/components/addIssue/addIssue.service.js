/**
 * Created by Amit.Mahida on 21-01-2016.
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
    var AddIssue, AddIssueService;
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
            AddIssue = (function () {
                function AddIssue(employeeName, projectName, jiraNumber, issueType, RCAType, comments, createdOn, createdBy, jiraUrl) {
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
                return AddIssue;
            }());
            exports_1("AddIssue", AddIssue);
            AddIssueService = (function () {
                function AddIssueService(http, commonService) {
                    this.http = http;
                    this.commonService = commonService;
                }
                AddIssueService.prototype.addIssues = function (params) {
                    var firstHeaders = new http_1.Headers();
                    firstHeaders.append('Content-Type', 'text/plain;charset=UTF-8');
                    return this.http.request(new http_1.Request({
                        method: app_config_1.APIS.HTTP_METHODS.POST,
                        url: app_config_1.APIS.ADD_ISSUE,
                        search: this.commonService.serializeObj(params)
                    })).map(function (res) { return res.json(); });
                };
                AddIssueService.prototype.getIssue = function (id) {
                    return this.http.request(new http_1.Request({
                        method: app_config_1.APIS.HTTP_METHODS.GET,
                        url: app_config_1.APIS.GET_ISSUE + id
                    })).map(function (res) { return res.json(); });
                };
                AddIssueService.prototype.updateIssue = function (params) {
                    var firstHeaders = new http_1.Headers();
                    firstHeaders.append('Content-Type', 'text/plain;charset=UTF-8');
                    return this.http.request(new http_1.Request({
                        method: app_config_1.APIS.HTTP_METHODS.POST,
                        url: app_config_1.APIS.UPDATE_ISSUE,
                        search: this.commonService.serializeObj(params)
                    })).map(function (res) { return res.json(); });
                };
                AddIssueService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, common_functions_1.CommonService])
                ], AddIssueService);
                return AddIssueService;
            }());
            exports_1("AddIssueService", AddIssueService);
        }
    }
});
//# sourceMappingURL=addIssue.service.js.map