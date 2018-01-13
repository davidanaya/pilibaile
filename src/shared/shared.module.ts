import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

// service
import { ProjectsService } from "./services/projects.service";

// containers
import { ProjectsListComponent } from "./containers/projects-list/projects-list.component";
import { ProjectViewerComponent } from "./containers/project-viewer/project-viewer.component";

// components
import { ProjectDetailComponent } from "./components/project-detail/project-detail.component";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [ProjectsListComponent, ProjectDetailComponent, ProjectViewerComponent],
  exports: [ProjectsListComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ProjectsService]
    };
  }
}
