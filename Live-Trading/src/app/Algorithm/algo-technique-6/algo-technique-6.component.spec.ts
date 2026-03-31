import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoTechnique6Component } from './algo-technique-6.component';

describe('AlgoTechnique6Component', () => {
  let component: AlgoTechnique6Component;
  let fixture: ComponentFixture<AlgoTechnique6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoTechnique6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoTechnique6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
