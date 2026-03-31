import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoTechnique2Component } from './algo-technique-2.component';

describe('AlgoTechnique2Component', () => {
  let component: AlgoTechnique2Component;
  let fixture: ComponentFixture<AlgoTechnique2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoTechnique2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoTechnique2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
