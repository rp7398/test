import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathersComponent } from './weathers';

describe('WeathersComponent', () => {
  let component: WeathersComponent;
  let fixture: ComponentFixture<WeathersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeathersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeathersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
