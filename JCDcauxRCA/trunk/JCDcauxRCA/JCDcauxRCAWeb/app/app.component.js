/**
 * Created by Amit.Mahida on 21-01-2016.
 */
System.register(['angular2/core', './app.config', 'angular2/router', 'angular2/http', "./components/login/login.component", "./components/addIssue/addIssue.component", "./components/listIssues/listIssues.component"], function(exports_1, context_1) {
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
    var core_1, app_config_1, router_1, http_1, login_component_1, addIssue_component_1, listIssues_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (addIssue_component_1_1) {
                addIssue_component_1 = addIssue_component_1_1;
            },
            function (listIssues_component_1_1) {
                listIssues_component_1 = listIssues_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.authenticated = true;
                }
                AppComponent.prototype.checkLogin = function (option) {
                    if (app_config_1.APIS.USER === "" || option === 'false') {
                        this.authenticated = false;
                        console.log('Not Logged In ' + app_config_1.APIS.USER + ";" + this.authenticated);
                    }
                    else {
                        this.authenticated = true;
                        console.log('Logged In ' + app_config_1.APIS.USER + "; " + this.authenticated);
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'rca',
                        templateUrl: 'app/init.html',
                        providers: [http_1.HTTP_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES, login_component_1.loginComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Login', component: login_component_1.loginComponent, useAsDefault: true },
                        { path: '/add-issue', name: 'Add', component: addIssue_component_1.addIssueComponent },
                        { path: '/add-issue/:id', name: 'Edit', component: addIssue_component_1.addIssueComponent },
                        { path: '/list-issues', name: 'List', component: listIssues_component_1.listIssueComponent },
                        { path: '/*path', redirectTo: ['Login'] }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map