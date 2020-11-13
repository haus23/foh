import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// Core Components
import { AppComponent } from './app.component';
import { ShellComponent } from './core/components/shell/shell.component';

// Core Pages
import { HomePageComponent } from './core/pages/home/home-page.component';

import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
