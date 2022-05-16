import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterBarComponent } from './letter-bar.component';

describe('LetterBarComponent', () => {
  let component: LetterBarComponent;
  let fixture: ComponentFixture<LetterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
