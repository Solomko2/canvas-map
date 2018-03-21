import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorCanvasComponent } from './floor-canvas-native.component';

describe('FloorCanvasComponent', () => {
  let component: FloorCanvasComponent;
  let fixture: ComponentFixture<FloorCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
