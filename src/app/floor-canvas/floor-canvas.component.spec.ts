import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KonvaImageComponent } from './floor-canvas.component';

describe('KonvaImageComponent', () => {
  let component: KonvaImageComponent;
  let fixture: ComponentFixture<KonvaImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonvaImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonvaImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
