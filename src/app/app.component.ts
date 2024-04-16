import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GraphComponent} from "./comp/graph/graph.component";
import {PointsComponent} from "./comp/points/points.component";
import {FilikComponent} from "./comp/filik/filik.component";
import {AppService} from "./app.service";
import {FormsModule} from "@angular/forms";
import {Respon} from "./response";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GraphComponent, PointsComponent, FilikComponent, FormsModule, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public appService:AppService) {
  }


}
