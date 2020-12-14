import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import AppRouteModule from "./app.routing.moudle";
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './details/details.component';
import HighlightDirective from "./details/highlight.directive";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NotFoundComponent,
    DetailsComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
