import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

// shared modules
import { SharedModule } from "../shared/shared.module";

// components
import { IaProjectsComponent } from "./components/ia-projects/ia-projects.component";

export const ROUTES: Routes = [{ path: "", component: IaProjectsComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule.forRoot()],
  declarations: [IaProjectsComponent]
})
export class InteriorArchitectureModule {}
