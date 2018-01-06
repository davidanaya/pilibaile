import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs/Observable";

import { ProjectsService } from "../../services/projects.service";

@Component({
  selector: "pb-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<any[]> = this.projectsService.projects$;

  constructor(private router: Router, private projectsService: ProjectsService) {}

  ngOnInit() {}

  handleView(project: any) {
    this.router.navigate(["/projects", project.id]);
  }
}
