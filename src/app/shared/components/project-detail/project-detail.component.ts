import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "pb-project-detail",
  templateUrl: "./project-detail.component.html",
  styleUrls: ["./project-detail.component.css"]
})
export class ProjectDetailComponent implements OnInit {
  @Input() project: any;

  constructor() {}

  ngOnInit() {}
}
