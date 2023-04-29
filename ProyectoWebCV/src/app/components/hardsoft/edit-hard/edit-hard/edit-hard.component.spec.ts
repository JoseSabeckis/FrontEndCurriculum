import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHardComponent } from './edit-hard.component';

describe('EditHardComponent', () => {
  let component: EditHardComponent;
  let fixture: ComponentFixture<EditHardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
