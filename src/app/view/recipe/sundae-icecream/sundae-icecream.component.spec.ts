import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SundaeIcecreamComponent } from './sundae-icecream.component';

describe('SundaeIcecreamComponent', () => {
  let component: SundaeIcecreamComponent;
  let fixture: ComponentFixture<SundaeIcecreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SundaeIcecreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SundaeIcecreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
