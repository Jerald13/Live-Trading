import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoTechnique5Component } from './algo-technique-5.component';

describe('AlgoTechnique5Component', () => {
  let component: AlgoTechnique5Component;
  let fixture: ComponentFixture<AlgoTechnique5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoTechnique5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoTechnique5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
