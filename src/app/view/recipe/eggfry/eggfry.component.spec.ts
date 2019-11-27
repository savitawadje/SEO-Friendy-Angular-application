import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EggfryComponent } from './eggfry.component';

describe('EggfryComponent', () => {
  let component: EggfryComponent;
  let fixture: ComponentFixture<EggfryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EggfryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EggfryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
