import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapadiComponent } from './papadi.component';

describe('PapadiComponent', () => {
  let component: PapadiComponent;
  let fixture: ComponentFixture<PapadiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapadiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
