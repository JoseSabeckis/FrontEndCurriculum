import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardsoftComponent } from './hardsoft.component';

describe('HardsoftComponent', () => {
  let component: HardsoftComponent;
  let fixture: ComponentFixture<HardsoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardsoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardsoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
