import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLifeCycleComponent } from './angular-life-cycle.component';

describe('AngularLifeCycleComponent', () => {
  let component: AngularLifeCycleComponent;
  let fixture: ComponentFixture<AngularLifeCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularLifeCycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
