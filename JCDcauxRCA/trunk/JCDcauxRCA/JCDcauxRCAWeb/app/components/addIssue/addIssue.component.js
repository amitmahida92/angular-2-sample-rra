/**
 * Created by Amit.Mahida on 21-01-2016.
 */
System.register(['angular2/core', './addIssue.service', 'angular2/router', '../../app.config', '../../shared/common.functions'], function(exports_1, context_1) {
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
    var core_1, addIssue_service_1, router_1, app_config_1, common_functions_1;
    var addIssueComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (addIssue_service_1_1) {
                addIssue_service_1 = addIssue_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            },
            function (common_functions_1_1) {
                common_functions_1 = common_functions_1_1;
            }],
        execute: function() {
            addIssueComponent = (function () {
                function addIssueComponent(_AddIssueService, _router, _routeParams) {
                    var _this = this;
                    this._AddIssueService = _AddIssueService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.form_label = "";
                    this.submit_label = "";
                    this.issueTypes = app_config_1.APIS.OPTIONS.ISSUES_TYPES.sort();
                    this.rcaTypes = app_config_1.APIS.OPTIONS.RCA_TYPES.sort();
                    this.authenticated = false;
                    this.issues = new addIssue_service_1.AddIssue(app_config_1.APIS.USER);
                    if (app_config_1.APIS.USER === "") {
                        this._router.navigate(['Login']);
                    }
                    if (!("id" in _routeParams.params)) {
                        this.form_label = "ADD ISSUE";
                        this.submit_label = "ADD";
                    }
                    else {
                        var id = _routeParams.params["id"];
                        _AddIssueService.getIssue(id).subscribe(function (res) {
                            var date = new Date(res[0]["createdOn"]);
                            res[0]["createdOn"] = (date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + ("0" + (date.getDate())).slice(-2));
                            _this.issues = res[0];
                        });
                        this.form_label = "EDIT ISSUE";
                        this.submit_label = "UPDATE";
                    }
                }
                addIssueComponent.prototype.addNewIssue = function () {
                    var _this = this;
                    var params = this.issues;
                    this._AddIssueService.addIssues(params).subscribe(function (response) {
                        if (response.data.auth === "true") {
                            _this._router.navigate(['List']);
                        }
                        else {
                            _this.authenticated = true;
                        }
                    });
                };
                addIssueComponent.prototype.updateIssue = function () {
                    var _this = this;
                    var params = this.issues;
                    this._AddIssueService.updateIssue(params).subscribe(function (response) {
                        if (response.data.success === "true") {
                            _this._router.navigate(['List']);
                        }
                        else {
                            _this.authenticated = true;
                        }
                    });
                };
                addIssueComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/components/addIssue/addIssue.html',
                        providers: [addIssue_service_1.AddIssueService, common_functions_1.CommonService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [addIssue_service_1.AddIssueService, router_1.Router, router_1.RouteParams])
                ], addIssueComponent);
                return addIssueComponent;
            }());
            exports_1("addIssueComponent", addIssueComponent);
        }
    }
});
//# sourceMappingURL=addIssue.component.js.map