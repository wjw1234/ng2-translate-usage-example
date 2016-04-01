System.register(['angular2/platform/browser', './app.component', "angular2/core", "angular2/http", "ng2-translate/ng2-translate"], function(exports_1) {
    var browser_1, app_component_1, core_1, http_1, ng2_translate_1, http_2, ng2_translate_2, ng2_translate_3;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
                ng2_translate_2 = ng2_translate_1_1;
                ng2_translate_3 = ng2_translate_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                http_1.HTTP_PROVIDERS,
                core_1.provide(ng2_translate_3.TranslateLoader, {
                    useFactory: function (http) { return new ng2_translate_2.TranslateStaticLoader(http, ''); },
                    deps: [http_2.Http]
                }),
                // use TranslateService here, and not TRANSLATE_PROVIDERS (which will define a default TranslateStaticLoader)
                ng2_translate_1.TranslateService
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map