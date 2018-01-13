import { Component, OnInit, Input } from "@angular/core";
import { INav } from "../header/header.component";

@Component({
  selector: "pb-nav-menu",
  templateUrl: "nav-menu.component.html",
  styleUrls: ["./nav-menu.component.scss"]
})
export class NavMenuComponent implements OnInit {
  @Input() title: INav;
  @Input() nav: INav[];
  @Input() social: INav[];

  constructor() {}

  ngOnInit() {}
}
