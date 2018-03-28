import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IFloorCanvasOption} from '../models/IFloorCanvasOption';
import {Observable} from 'rxjs/Observable';
import * as Konva from 'konva';
import * as R from 'ramda';

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
export class FloorCanvasComponent implements OnInit {
  @Input()
  set options(val: IFloorCanvasOption) {
    this._options = val;
    this._initCanvas(this._options.points);
  }

  get options() {
    return this._options;
  }

  @ViewChild('floor') canvas: any;

  private stage: Konva.Stage;
  private layer: Konva.Layer;
  private _options: IFloorCanvasOption;
  private planWidth: number;
  private planHeight: number;
  private centerPositionX: number;
  private centerPositionY: number;
  private zoomK: number;

  private _initCanvas(seats: Seat[]) {
    this.destroy();

    const width = this.options.width || window.innerWidth,
      height = this.options.height || window.innerHeight;

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
          const k = r.width / r.height;
          this.planWidth = k * height;
          this.planHeight = height;
          this.centerPositionX = width / 2 - this.planWidth / 2;
          this.centerPositionY = height / 2 - this.planHeight / 2;
          this.zoomK = this.planHeight / r.height;

          this.addFloorToLayer({
            x: this.centerPositionX,
            y: 0,
            image: imageObj,
            width: this.planWidth,
            height: this.planHeight
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

  private destroy(): void {
    if (this.stage) {
      this.stage.clear();
      this.stage.clearCache();
      this.stage.destroy();
    }
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

      // IE fix
      setTimeout(() => {
        document.body.removeChild(imageOfPlan);
      }, 100);
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
        x: this.fixPositionX(item.seat_coordinate.x),
        y: this.fixPositionY(item.seat_coordinate.y),
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

      const pointerCoord = stage.getPointerPosition();

      const pointerXDefault = R.defaultTo(1);
      const pointerYDefault = R.defaultTo(1);

      const pointerX = pointerXDefault(R.prop('x', pointerCoord));
      const pointerY = pointerYDefault(R.prop('y', pointerCoord));

      const mousePointTo = {
        x: pointerX / oldScale - stage.x() / oldScale,
        y: pointerY / oldScale - stage.y() / oldScale,
      };

      const newScale = e.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;

      stage.scale({x: newScale, y: newScale});

      const newPos = {
        x: -(mousePointTo.x - pointerX / newScale) * newScale,
        y: -(mousePointTo.y - pointerY / newScale) * newScale
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

  // HELPERS
  private fixPositionX(val: number | string): number {
    return ((+val) * this.zoomK) + this.centerPositionX;
  }
  private fixPositionY(val: number | string): number {
    return ((+val) * this.zoomK) + this.centerPositionY;
  }

  constructor() {
  }

  ngOnInit() {
  }
}
