import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

// components
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { ProjectDetailComponent } from "./components/project-detail/project-detail.component";

// containers
import { ProjectViewerComponent } from "./containers/project-viewer/project-viewer.component";
import { ProjectsComponent } from "./containers/projects/projects.component";

// services
import { ProjectsService } from "./services/projects.service";

const routes: Routes = [
  { path: "", redirectTo: "projects", pathMatch: "full" },
  {
    path: "projects",
    children: [{ path: "", component: ProjectsComponent }, { path: ":id", component: ProjectViewerComponent }]
  },
  { path: "about-me", component: AboutMeComponent },
  { path: "**", component: ProjectsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    ProjectViewerComponent
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
