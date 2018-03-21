import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {IFloorCanvasOption} from '../models/IFloorCanvasOption';

@Component({
  selector: 'app-floor-canvas-native',
  templateUrl: './floor-canvas-native.component.html',
  styleUrls: ['./floor-canvas-native.component.css']
})
export class FloorCanvasNativeComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvas: any;
  @Input() options: IFloorCanvasOption;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._initCanvas(this.canvas.nativeElement, this.options);
  }


  private _initCanvas(el, options) {
    const context = el.getContext('2d'),
      imageObj = new Image(),
      cv = options.width,
      ch = options.height;
    const src = this.options.imgSrc;
    imageObj.src = src;
    imageObj.onload = () => {
      context.clearRect(0, 0, cv, ch);
      context.drawImage(imageObj, 0, 0);
    };
  }
}
