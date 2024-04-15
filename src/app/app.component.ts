import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GraphComponent} from "./comp/graph/graph.component";
import {PointsComponent} from "./comp/points/points.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GraphComponent, PointsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
