import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs/Observable";

import { ProjectsService } from "../../services/projects.service";

@Component({
  selector: "pb-projects-list",
  templateUrl: "./projects-list.component.html",
  styleUrls: ["./projects-list.component.scss"]
})
export class ProjectsListComponent implements OnInit {
  @Input() type: string;

  projects$: Observable<any[]>;

  constructor(private router: Router, private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projects$ = this.projectsService.getProjects(this.type);
  }

  handleView(project: any) {
    // this.router.navigate(["/projects", project.id]);
    console.log(`Navigate to /projects/${this.type}/${project.id}`);
  }
}
