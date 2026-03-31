import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoTechnique8Component } from './algo-technique-8.component';

describe('AlgoTechnique8Component', () => {
  let component: AlgoTechnique8Component;
  let fixture: ComponentFixture<AlgoTechnique8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoTechnique8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoTechnique8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
