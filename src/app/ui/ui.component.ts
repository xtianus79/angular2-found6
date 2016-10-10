import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ui-main',
    templateUrl: 'ui.component.html',
    styleUrls: [ 'ui.component.css' ]
})
export class UiComponent {
    title = 'Tour of Heroes';
}