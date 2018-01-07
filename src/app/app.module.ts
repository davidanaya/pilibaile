import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// components
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";

// modules
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
