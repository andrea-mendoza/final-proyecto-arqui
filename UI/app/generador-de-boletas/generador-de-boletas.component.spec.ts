import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradorDeBoletasComponent } from './generador-de-boletas.component';

describe('GeneradorDeBoletasComponent', () => {
  let component: GeneradorDeBoletasComponent;
  let fixture: ComponentFixture<GeneradorDeBoletasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneradorDeBoletasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneradorDeBoletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
