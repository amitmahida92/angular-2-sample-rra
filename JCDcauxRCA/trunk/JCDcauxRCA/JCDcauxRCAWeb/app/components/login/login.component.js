/**
 * Created by Amit.Mahida on 21-01-2016.
 */
System.register(['angular2/core', './login.service', 'angular2/router', "../../app.config", '../../shared/common.functions'], function(exports_1, context_1) {
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
    var core_1, login_service_1, router_1, app_config_1, common_functions_1;
    var loginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
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
            loginComponent = (function () {
                function loginComponent(_LoginService, _router) {
                    this._LoginService = _LoginService;
                    this._router = _router;
                    this.userDetails = new login_service_1.Login('', '');
                    this.loginError = false;
                }
                loginComponent.prototype.authenticate = function () {
                    var _this = this;
                    this.userDetails.username = this.userDetails.username.toLowerCase();
                    app_config_1.APIS.USER = this.userDetails.username;
                    var params = this.userDetails;
                    this._LoginService.authenticate(params).subscribe(function (response) {
                        if (response.data.auth === 'true') {
                            _this._router.navigate(['List']);
                        }
                        else {
                            _this._router.navigate(['Login']);
                            _this.loginError = true;
                        }
                    });
                };
                loginComponent.prototype.onCancel = function () {
                    this.userDetails = new login_service_1.Login('', '');
                };
                loginComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/components/login/login.html',
                        providers: [login_service_1.LoginService, common_functions_1.CommonService]
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
                ], loginComponent);
                return loginComponent;
            }());
            exports_1("loginComponent", loginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map