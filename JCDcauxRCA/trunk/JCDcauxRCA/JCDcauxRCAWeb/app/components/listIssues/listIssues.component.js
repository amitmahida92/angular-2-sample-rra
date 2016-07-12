/**
 * Created by Amit.Mahida on 03-02-2016.
 */
System.register(['angular2/core', '../../app.config', './listIssues.service', '../../shared/common.functions', 'angular2/router', 'ng2-pagination'], function(exports_1, context_1) {
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
    var core_1, app_config_1, listIssues_service_1, common_functions_1, router_1, ng2_pagination_1;
    var listIssueComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            },
            function (listIssues_service_1_1) {
                listIssues_service_1 = listIssues_service_1_1;
            },
            function (common_functions_1_1) {
                common_functions_1 = common_functions_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_pagination_1_1) {
                ng2_pagination_1 = ng2_pagination_1_1;
            }],
        execute: function() {
            listIssueComponent = (function () {
                function listIssueComponent(listIssueService, _router) {
                    this.listIssueService = listIssueService;
                    this._router = _router;
                    this.issuePage = {};
                    this.config = {
                        id: 'custom',
                        itemsPerPage: 5,
                        currentPage: 1
                    };
                    this.currentIssues = [];
                }
                listIssueComponent.prototype.ngOnInit = function () {
                    if (app_config_1.APIS.USER === "") {
                        this._router.navigate(['Login']);
                    }
                    this.listIssues();
                    //this.issuePage = Object.assign(this.issuePage, PAGINATE.CustomPagination);
                    //console.log(this.issuePage);
                };
                listIssueComponent.prototype.listIssues = function () {
                    var _this = this;
                    var temp = [];
                    this.listIssueService.listIssues().subscribe(function (res) {
                        res.forEach(function (val, key) {
                            //console.log(val.createdOn);
                            if (val["createdOn"]) {
                                var b = new Date(val.createdOn);
                                val["createdOn"] = b;
                            }
                        });
                        _this.currentIssues = res;
                    });
                };
                listIssueComponent.prototype.editIssue = function (issue) {
                    this._router.navigate(['Edit', { id: issue._id }]);
                };
                listIssueComponent.prototype.deleteIssue = function (id) {
                    var _this = this;
                    var txt;
                    var r = confirm("Are you sure want to delete issue?");
                    if (r == true) {
                        this.listIssueService.deleteIssue(id).subscribe(function (response) {
                            if (response.data.success === "true") {
                                _this.listIssues();
                            }
                        });
                    }
                    else {
                    }
                };
                listIssueComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/components/listIssues/listIssues.html',
                        directives: [router_1.ROUTER_DIRECTIVES, ng2_pagination_1.PaginationControlsCmp],
                        pipes: [ng2_pagination_1.PaginatePipe],
                        providers: [ng2_pagination_1.PaginationService, listIssues_service_1.ListIssueService, common_functions_1.CommonService]
                    }), 
                    __metadata('design:paramtypes', [listIssues_service_1.ListIssueService, router_1.Router])
                ], listIssueComponent);
                return listIssueComponent;
            }());
            exports_1("listIssueComponent", listIssueComponent);
        }
    }
});
//# sourceMappingURL=listIssues.component.js.map