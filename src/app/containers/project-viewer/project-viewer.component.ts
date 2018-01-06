import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { map, filter } from "rxjs/operators";

import { ProjectsService } from "../../services/projects.service";

@Component({
  selector: "pb-project-viewer",
  templateUrl: "./project-viewer.component.html",
  styleUrls: ["./project-viewer.component.css"]
})
export class ProjectViewerComponent implements OnInit {
  project$: Observable<any>;
  private id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {
    this.project$ = this.projectsService.projectsById$.pipe(
      filter(projects => projects),
      map(projects => projects[this.id])
    );
    this.route.params.subscribe((data: Params) => (this.id = data.id));
  }

  ngOnInit() {}
}
