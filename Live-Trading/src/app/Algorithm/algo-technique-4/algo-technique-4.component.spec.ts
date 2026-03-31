import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoTechnique4Component } from './algo-technique-4.component';

describe('AlgoTechnique4Component', () => {
  let component: AlgoTechnique4Component;
  let fixture: ComponentFixture<AlgoTechnique4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoTechnique4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoTechnique4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
