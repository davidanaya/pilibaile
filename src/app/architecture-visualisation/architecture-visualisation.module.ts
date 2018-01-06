import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

// shared modules
import { SharedModule } from "../shared/shared.module";

// components
import { AvProjectsComponent } from "./components/av-projects/av-projects.component";

export const ROUTES: Routes = [{ path: "", component: AvProjectsComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule.forRoot()],
  declarations: [AvProjectsComponent]
})
export class ArchitectureVisualisationModule {}
