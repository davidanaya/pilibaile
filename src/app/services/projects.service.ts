import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

@Injectable()
export class ProjectsService {
  projects$: Observable<any[]> = this.http.get<any[]>("assets/projects.json");
  projectsById$: Observable<any> = this.projects$.pipe(map(projects => this.toProjectsById(projects)));

  constructor(private http: HttpClient) {}

  private toProjectsById(projects: any[]): any {
    const projectsById = {};
    projects.forEach(project => (projectsById[project.id] = project));
    return projectsById;
  }
}
