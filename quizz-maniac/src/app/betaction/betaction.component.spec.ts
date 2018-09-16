import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetActionComponent } from './betaction.component';

describe('BetActionComponent', () => {
  let component: BetActionComponent;
  let fixture: ComponentFixture<BetActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
