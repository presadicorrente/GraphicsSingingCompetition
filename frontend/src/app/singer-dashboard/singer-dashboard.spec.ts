import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingerDashboard } from './singer-dashboard';

describe('SingerDashboard', () => {
  let component: SingerDashboard;
  let fixture: ComponentFixture<SingerDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingerDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(SingerDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
