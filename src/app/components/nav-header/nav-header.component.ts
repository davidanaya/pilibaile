import { Component, OnInit, Input } from "@angular/core";
import { INav } from "../../models/nav.model";

@Component({
  selector: "pb-nav-header",
  templateUrl: "./nav-header.component.html",
  styleUrls: ["./nav-header.component.scss"]
})
export class NavHeaderComponent implements OnInit {
  @Input() title: INav;
  @Input() nav: INav[];
  @Input() social: INav[];

  constructor() {}

  ngOnInit() {}
}
