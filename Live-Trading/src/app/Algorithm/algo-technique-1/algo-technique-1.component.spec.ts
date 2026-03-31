import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoTechnique1Component } from './algo-technique-1.component';

describe('AlgoTechnique1Component', () => {
  let component: AlgoTechnique1Component;
  let fixture: ComponentFixture<AlgoTechnique1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoTechnique1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoTechnique1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
