import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaListComponent } from './experiencia-list.component';

describe('ExperienciaListComponent', () => {
  let component: ExperienciaListComponent;
  let fixture: ComponentFixture<ExperienciaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienciaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
