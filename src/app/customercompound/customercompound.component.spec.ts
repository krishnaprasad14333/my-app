import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercompoundComponent } from './customercompound.component';

describe('CustomercompoundComponent', () => {
  let component: CustomercompoundComponent;
  let fixture: ComponentFixture<CustomercompoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomercompoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomercompoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
