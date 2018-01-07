import { Component, OnInit } from "@angular/core";

export interface INav {
  link: string;
  name: string;
  exact?: boolean;
  icon?: string;
}

@Component({
  selector: "pb-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  title: INav = { link: "/", name: "PILI BAILE", exact: true };

  nav: INav[] = [
    { link: "/about-me", name: "About", exact: true },
    { link: "/architecture-visualisation", name: "Archviz", exact: true },
    { link: "/interior-architecture", name: "Interior design", exact: true }
  ];

  social: INav[] = [
    { link: "mailto:lapilit@gmail.com", name: "mailto", icon: "envelope" },
    { link: "https://es.linkedin.com/in/pilibaile", name: "linkedin", icon: "linkedin-square" },
    { link: "https://www.behance.net/pilibailea", name: "behance", icon: "behance-square" }
  ];
  constructor() {}

  ngOnInit() {}
}
