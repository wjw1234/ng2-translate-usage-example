/**
 * Created by grzesiek on 01.04.16.
 */
import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {provide} from "angular2/core";
import TRANSLATE_PROVIDERS from "ng2-translate/ng2-translate";
import {HTTP_PROVIDERS} from "angular2/http";
import {TranslateService} from "ng2-translate/ng2-translate";
import {Http} from "angular2/http";
import {TranslateStaticLoader} from "ng2-translate/ng2-translate";
import {TranslateLoader} from "ng2-translate/ng2-translate";

bootstrap(
    AppComponent, [
        HTTP_PROVIDERS,
        provide(TranslateLoader, {
            useFactory: (http: Http) => new TranslateStaticLoader(http, ''),
            deps: [Http]
        }),
        // use TranslateService here, and not TRANSLATE_PROVIDERS (which will define a default TranslateStaticLoader)
        TranslateService
    ]);
