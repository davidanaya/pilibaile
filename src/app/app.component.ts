import { Component } from "@angular/core";
import { INav } from "./models/nav.model";

@Component({
  selector: "pb-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
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
}
