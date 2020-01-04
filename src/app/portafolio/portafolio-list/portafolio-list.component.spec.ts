import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioListComponent } from './portafolio-list.component';

describe('PortafolioListComponent', () => {
  let component: PortafolioListComponent;
  let fixture: ComponentFixture<PortafolioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortafolioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafolioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
