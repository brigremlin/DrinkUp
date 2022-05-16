import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCabinetComponent } from './my-cabinet.component';

describe('MyCabinetComponent', () => {
  let component: MyCabinetComponent;
  let fixture: ComponentFixture<MyCabinetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCabinetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
