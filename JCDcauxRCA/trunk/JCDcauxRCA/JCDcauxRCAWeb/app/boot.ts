/**
 * Created by Amit.Mahida on 21-01-2016.
 */

import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS,APP_BASE_HREF} from 'angular2/router';
import {AppComponent}     from './app.component';
import {enableProdMode} from 'angular2/core';


// Add these symbols to override the `LocationStrategy`
import {provide}           from 'angular2/core';
import {LocationStrategy,HashLocationStrategy} from 'angular2/router';
enableProdMode();



bootstrap(AppComponent, [ROUTER_PROVIDERS,provide(LocationStrategy,
    {useClass: HashLocationStrategy}),provide(APP_BASE_HREF, {useValue: '/RCA/nx/'})]);