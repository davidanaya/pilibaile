import { Component } from "@angular/core";

interface INav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: "pb-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  nav: INav[] = [
    { link: "/", name: "Home", exact: true },
    { link: "/about-me", name: "About me", exact: true },
    { link: "/interior-architecture", name: "Interior architecture", exact: true },
    { link: "/architecture-visualisation", name: "Architecture visualisation", exact: true }
  ];
}
