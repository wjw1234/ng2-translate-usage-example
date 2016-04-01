/**
 * Created by grzesiek on 01.04.16.
 */
import {Component} from 'angular2/core';
import {TranslatePipe} from "ng2-translate/ng2-translate";
import {TranslateService} from "ng2-translate/ng2-translate";

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>',
    pipes: [TranslatePipe]
})
export class AppComponent {
    constructor(translate: TranslateService) {
        translate.setComponent('my-app');
    }
}
