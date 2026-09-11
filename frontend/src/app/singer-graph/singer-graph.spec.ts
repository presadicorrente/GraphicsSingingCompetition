import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingerGraph } from './singer-graph';

describe('SingerGraph', () => {
  let component: SingerGraph;
  let fixture: ComponentFixture<SingerGraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingerGraph],
    }).compileComponents();

    fixture = TestBed.createComponent(SingerGraph);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
