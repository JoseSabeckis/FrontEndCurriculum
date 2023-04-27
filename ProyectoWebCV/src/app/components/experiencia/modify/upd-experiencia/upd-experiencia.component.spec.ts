import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdExperienciaComponent } from './upd-experiencia.component';

describe('UpdExperienciaComponent', () => {
  let component: UpdExperienciaComponent;
  let fixture: ComponentFixture<UpdExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
