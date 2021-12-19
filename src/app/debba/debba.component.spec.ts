import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebbaComponent } from './debba.component';

describe('DebbaComponent', () => {
  let component: DebbaComponent;
  let fixture: ComponentFixture<DebbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
