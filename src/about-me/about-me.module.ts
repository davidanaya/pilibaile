import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

// shared modules
import { SharedModule } from "../shared/shared.module";

// components
import { AboutMeComponent } from "./components/about-me/about-me.component";

export const ROUTES: Routes = [{ path: "", component: AboutMeComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule.forRoot()],
  declarations: [AboutMeComponent]
})
export class AboutMeModule {}
