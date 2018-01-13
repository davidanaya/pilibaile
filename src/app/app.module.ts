// import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { MatMenuModule } from "@angular/material/menu";

// components
import { AppComponent } from "./app.component";
import { NavHeaderComponent } from "./components/nav-header/nav-header.component";
import { NavMenuComponent } from "./components/nav-menu/nav-menu.component";

// modules
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [BrowserAnimationsModule, AppRoutingModule, SharedModule.forRoot(), MatMenuModule],
  declarations: [AppComponent, NavHeaderComponent, NavMenuComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
