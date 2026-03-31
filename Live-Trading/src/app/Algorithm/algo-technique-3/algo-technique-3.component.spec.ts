import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoTechnique3Component } from './algo-technique-3.component';

describe('AlgoTechnique3Component', () => {
  let component: AlgoTechnique3Component;
  let fixture: ComponentFixture<AlgoTechnique3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoTechnique3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoTechnique3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
