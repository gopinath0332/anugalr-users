import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UsersComponent } from "./users/users.component";
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [{
  path: "users", component: UsersComponent
}, {
  path: "detail", component: DetailsComponent
}, {
  path: "", redirectTo: "/users", pathMatch: "full"
}, {
  path: "**", component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export default class AppRoutingModule { }
