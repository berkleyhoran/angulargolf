import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfinfoComponent } from './golfinfo.component';

describe('GolfinfoComponent', () => {
  let component: GolfinfoComponent;
  let fixture: ComponentFixture<GolfinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolfinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolfinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
