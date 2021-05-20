import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMemotestComponent } from './listado-memotest.component';

describe('ListadoMemotestComponent', () => {
  let component: ListadoMemotestComponent;
  let fixture: ComponentFixture<ListadoMemotestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoMemotestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMemotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
