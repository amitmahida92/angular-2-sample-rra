/**
 * Created by Amit.Mahida on 21-01-2016.
 */
System.register(['angular2/platform/browser', 'angular2/router', './app.component', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, router_1, app_component_1, core_1, core_2, router_2;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, core_2.provide(router_2.LocationStrategy, { useClass: router_2.HashLocationStrategy }), core_2.provide(router_1.APP_BASE_HREF, { useValue: '/RCA/nx/' })]);
        }
    }
});
//# sourceMappingURL=boot.js.map