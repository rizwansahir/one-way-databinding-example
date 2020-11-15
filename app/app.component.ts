import { Component } from "@angular/core";
import { AppBaseComponentService } from "./app-base-component.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent extends AppBaseComponentService {}
