import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

@Injectable()
export class ProjectsService {
  constructor(private http: HttpClient) {}

  getProjects(type: string): Observable<any[]> {
    return this.http.get<any[]>(`assets/projects/${type}.json`);
  }
}
