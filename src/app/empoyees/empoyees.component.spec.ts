import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpoyeesComponent } from './empoyees.component';

describe('EmpoyeesComponent', () => {
  let component: EmpoyeesComponent;
  let fixture: ComponentFixture<EmpoyeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EmpoyeesComponent]
    });
    fixture = TestBed.createComponent(EmpoyeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
