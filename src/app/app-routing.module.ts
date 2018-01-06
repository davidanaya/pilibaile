import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const ROUTES: Routes = [
  { path: "", loadChildren: "./home/home.module#HomeModule" },
  { path: "about-me", loadChildren: "./about-me/about-me.module#AboutMeModule" },
  {
    path: "interior-architecture",
    loadChildren: "./interior-architecture/interior-architecture.module#InteriorArchitectureModule"
  },
  {
    path: "architecture-visualisation",
    loadChildren:
      "./architecture-visualisation/architecture-visualisation.module#ArchitectureVisualisationModule"
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
