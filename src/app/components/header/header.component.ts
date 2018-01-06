import { Component, OnInit } from "@angular/core";

interface INav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: "pb-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  nav: INav[] = [
    { link: "/", name: "Home", exact: true },
    { link: "/about-me", name: "About me", exact: true }
  ];

  constructor() {}

  ngOnInit() {}
}
