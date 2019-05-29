import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DominioListaComponent } from './dominio-lista.component';

describe('DominioListaComponent', () => {
  let component: DominioListaComponent;
  let fixture: ComponentFixture<DominioListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DominioListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DominioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
