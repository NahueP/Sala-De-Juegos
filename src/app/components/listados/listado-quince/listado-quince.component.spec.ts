import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoQuinceComponent } from './listado-quince.component';

describe('ListadoQuinceComponent', () => {
  let component: ListadoQuinceComponent;
  let fixture: ComponentFixture<ListadoQuinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoQuinceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoQuinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
