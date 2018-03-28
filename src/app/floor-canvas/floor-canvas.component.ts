import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {IFloorCanvasOption} from '../models/IFloorCanvasOption';
import {Observable} from 'rxjs/Observable';
import * as Konva from 'konva';

export interface Seat {
  average_occupancy: number;
  id: string;
  plugwise_id: number;
  seat_coordinate: {
    x: string;
    y: string;
  };
  seat_name: string;
}

export interface Point {
  x: number;
  y: number;
  radius: number;
  fill: string;
  stroke: string;
  strokeWidth: number;
  draggable: boolean;
}

@Component({
  selector: 'app-floor-canvas',
  templateUrl: './floor-canvas.component.html',
  styleUrls: ['./floor-canvas.component.css']
})
export class FloorCanvasComponent implements OnInit, AfterViewInit {
  @Input() options: IFloorCanvasOption;
  @ViewChild('floor') canvas: any;

  private stage: Konva.Stage;
  private layer: Konva.Layer;

  get height() {
    return this.options.height;
  }

  private _initCanvas(seats: Seat[]) {
    const width = this.options.width,
      height = this.options.height;

    this.stage = new Konva.Stage({
        container: this.canvas.nativeElement,
        width: width,
        height: height,
        draggable: true
      });

    this.layer = new Konva.Layer();
    const imageObj = new Image();

    imageObj.onload = () => {
      this.setImageToDOM(this.options.imgSrc)
        .subscribe(r => {

          this.addFloorToLayer({
            x: 0,
            y: 0,
            image: imageObj,
            width: r.width,
            height: r.height
          });

          // add seats
          this.addSeatsToLayer(seats);

          // add all layer
          this.stage.add(this.layer);

          // add zoom
          this.addZoomToStage(this.stage);
        });


    };
    imageObj.src = this.options.imgSrc;
  }

  private setImageToDOM(src): Observable<any> {
    return Observable.create(obs => {
      const imageOfPlan = document.createElement('img');
      imageOfPlan.style.maxWidth = 'none';
      imageOfPlan.style.position = 'absolute';
      imageOfPlan.style.top = '0px';
      imageOfPlan.style.left = '-9999%';
      imageOfPlan.style.zIndex = '-20';
      imageOfPlan.crossOrigin = 'Anonymous';

      imageOfPlan.src = src;


      imageOfPlan.onerror = err => obs.error(err);
      imageOfPlan.onabort = err => obs.error(err);
      imageOfPlan.onload = () => obs.next(imageOfPlan);

      document.body.appendChild(imageOfPlan);
      document.body.removeChild(imageOfPlan);
    });
  }

  private addFloorToLayer(floorOptions: any) {
    const floor = new Konva.Image(floorOptions);

    floor.on('click', (e) => {
      const {layerX, layerY} = e.evt;
      const {x: stageX, y: stageY, scaleX, scaleY} = this.stage.getAttrs();

      const newCircle = this.createNewSeats({
        x: (layerX - (stageX)) / scaleX,
        y: (layerY - (stageY)) / scaleY,
        radius: 8,
        fill: 'blue',
        stroke: 'blue',
        strokeWidth: 0,
        draggable: true
      });

      this.layer.add(newCircle);
      this.stage.batchDraw();
    });
    this.layer.add(floor);
  }

  private addSeatsToLayer(seats: Seat[]) {
    seats.map((item: Seat) => {
      const circle = this.createNewSeats({
        x: (+item.seat_coordinate.x),
        y: (+item.seat_coordinate.y),
        radius: 8,
        fill: 'red',
        stroke: 'red',
        strokeWidth: 0,
        draggable: true
      });

      this.layer.add(circle);
    });
  }

  private addZoomToStage(stage) {
    const scaleBy = 1.1;

    this.canvas.nativeElement.addEventListener('wheel', (e) => {
      e.preventDefault();
      const oldScale = stage.scaleX();

      const mousePointTo = {
        x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
        y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
      };

      const newScale = e.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;

      stage.scale({x: newScale, y: newScale});



      const newPos = {
        x: -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
        y: -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
      };
      stage.position(newPos);
      stage.batchDraw();
    });
  }

  public createNewSeats(point: Point) {
    const circle = new Konva.Circle(point);
    circle.on('dragend', (e) => {
      console.log(e);
    });
    circle.on('click', () => {
      console.log(point);
    });
    return circle;
  }

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._initCanvas(this.options.points);
  }
}
