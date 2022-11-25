import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecylechildComponent } from './lifecylechild.component';

describe('LifecylechildComponent', () => {
  let component: LifecylechildComponent;
  let fixture: ComponentFixture<LifecylechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecylechildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecylechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
