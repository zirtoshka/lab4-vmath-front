import {Component} from '@angular/core';
import * as JXG from 'jsxgraph';
import {GeometryElement} from "jsxgraph";
import {Respon} from "../../response";

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})

export class GraphComponent {
  board!: JXG.Board;
  lines: GeometryElement[] = [];
  x = -3;


  ngOnInit() {
    this.board = this.boardInit(-5, 5, 5, -5);
  }

  linearApproxDraw(ab: number[], left:number, right:number){
    this.lines.push(this.board.create('functiongraph', [function (x: number) {
      return ab[0]*x+ab[1];
    }, left, right], {
      strokeColor: '#6600ff',
      strokeWidth: 2// Красный цвет для линии графика
    }));
  }
  squareApproxDraw(abc: number[], left:number, right:number){
    this.lines.push(this.board.create('functiongraph', [function (x: number) {
      return abc[0]+abc[1]*x+abc[2]*x*x;
    }, left, right], {
      strokeColor: '#00ff22',
      strokeWidth: 2
    }));
  }
  approxDraw(resp: Respon){
    this.linearApproxDraw(resp.linear,-3,3);
    this.squareApproxDraw(resp.square,-3,3);

  }

  boardInit(a: number, b: number, c: number, d: number) {
    return JXG.JSXGraph.initBoard('jxgbox', {
      boundingbox: [a, b, c, d],
      grid: true,
      showCopyright: false,
      axis: true,
      defaultAxes: {
        x: {
          ticks: {
            drawZero: true,
            majorHeight: 5,
            minTicksDistance: 1,
            strokeColor: 'black',
          },
          name: 'X',
          withLabel: true,
          color: 'black',
          label: {
            position: 'rt',
            offset: [7, 10],
            anchorX: 'right',
            color: 'black'
          }
        },
        y: {
          ticks: {
            majorHeight: 5,
            minTicksDistance: 1,
            strokeColor: 'black',
          },
          color: 'black',
          withLabel: true,
          name: 'Y',
          label: {
            position: 'rt',
            offset: [-15, 10],
            anchorY: 'top',
            color: "black",

          }
        }
      },
      description: 'super-puper graph',


    });
  }

}
