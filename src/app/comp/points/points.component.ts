import {Component, EventEmitter, inject, Output} from '@angular/core';
import {AppService} from "../../app.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {GraphComponent} from "../graph/graph.component";
import {Respon} from "../../response";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {Point} from "../../Point";
import {max} from "rxjs";


@Component({
    selector: 'app-points',
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        ReactiveFormsModule,
        NgIf
    ],
    templateUrl: './points.component.html',
    styleUrl: './points.component.css'
})


export class PointsComponent {
    private appService = inject(AppService);


    @Output() choseEvent = new EventEmitter<Respon>();
    @Output() newPointEvent = new EventEmitter<Point>();



    pointsForm: FormGroup[] = [];
    readonly maxPoints = 12;
    readonly minPoints = 8;

    constructor(private fb: FormBuilder) {
        for (let i = 0; i < this.minPoints; i++) {
            this.addPoint();
        }
    }

    addPoint() {
        if (this.pointsForm.length < this.maxPoints) {
            const pointFormGroup = this.fb.group({
                x: [0, [Validators.required, Validators.pattern('-?\\d+([\\.,]\\d+)?')]],
                y: [0, [Validators.required, Validators.pattern('-?\\d+([\\.,]\\d+)?')]]
            });
            this.pointsForm.push(pointFormGroup);
            if (pointFormGroup.value.x!=undefined && pointFormGroup.value.y!=undefined) {
                // this.newPointEvent.emit([pointFormGroup.value.x, pointFormGroup.value.y]);
            }

        }
    }

    removePoint(index: number) {
        this.pointsForm.splice(index, 1);
    }

    checkPoints() {
        if (this.pointsForm.length > 12 || this.pointsForm.length < 8) return false;
        return this.pointsForm.every(pointForm => pointForm.valid);

    }

    sendPoints() {
        let x: number[] = [];
        let y: number[] = [];
        this.pointsForm.every(point => x.push(point.value.x));
        this.pointsForm.every(point => y.push(point.value.y));

        this.appService.approxRequest({x, y}).subscribe({
            next: (response) => {
                // console.info(response.linear);
                //   here i need
                this.newPointEvent.emit({x,y});

                this.choseEvent.emit(response);


            },
            error: (error) => {
                console.error(error);
            }
        })
    }

}
