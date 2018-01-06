import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

// shared modules
import { SharedModule } from "../shared/shared.module";

// components
import { HomeComponent } from "./components/home/home.component";

export const ROUTES: Routes = [{ path: "", pathMatch: "full", component: HomeComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule.forRoot()],
  declarations: [HomeComponent]
})
export class HomeModule {}
