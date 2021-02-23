import { AdoptionRequestsComponent } from "./adoption-requests.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "../pets/create.component";
import { EditComponent } from "../pets/edit.component";

const routes: Routes = [
  {
    path: "",
    component: AdoptionRequestsComponent,
    children: [
      { path: "create", component: CreateComponent },
      { path: "edit", component: EditComponent },

      // otherwise redirect to home
      { path: "**", redirectTo: "" },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdoptionRequestsRoutingModule {}
