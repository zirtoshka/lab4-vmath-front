import {Component, EventEmitter, inject, Output} from '@angular/core';
import {AppService} from "../../app.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {GraphComponent} from "../graph/graph.component";
import {Respon} from "../../response";

@Component({
  selector: 'app-points',
  standalone: true,
  imports: [],
  templateUrl: './points.component.html',
  styleUrl: './points.component.css'
})
export class PointsComponent {
  private appService = inject(AppService);

  @Output() choseEvent = new EventEmitter<Respon>();

  pointsSend() {
    this.appService.approxRequest().subscribe({
      next: (response) => {
        // console.info(response.linear);
      //   here i need
        this.choseEvent.emit(response);

      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
