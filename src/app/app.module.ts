import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeroDetailComponent, HeroesComponent, DashboardComponent } from './dashboard/index';
import { AppComponent } from './app.component';
import { UiComponent } from './ui/index';
import { HeroService } from './services/index';
import { routing } from './app.routing';

@NgModule({
    imports: [ 
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [ 
        AppComponent,
        UiComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent
     ],
     providers: [
         HeroService
     ],
    bootstrap: [ AppComponent ]
})
export class AppModule { 

}