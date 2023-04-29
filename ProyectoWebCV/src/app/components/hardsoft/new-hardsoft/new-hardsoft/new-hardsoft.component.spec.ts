import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHardsoftComponent } from './new-hardsoft.component';

describe('NewHardsoftComponent', () => {
  let component: NewHardsoftComponent;
  let fixture: ComponentFixture<NewHardsoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHardsoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewHardsoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
