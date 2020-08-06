import { Component } from '@angular/core';

// NOTE from LMC : app-root is defined in the body of index.html
//template or styles can be defined her eor in separate files

@Component({
    selector: 'mw-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {}