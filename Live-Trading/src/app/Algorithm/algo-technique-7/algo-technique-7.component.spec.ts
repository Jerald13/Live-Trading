import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoTechnique7Component } from './algo-technique-7.component';

describe('AlgoTechnique7Component', () => {
  let component: AlgoTechnique7Component;
  let fixture: ComponentFixture<AlgoTechnique7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoTechnique7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoTechnique7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
