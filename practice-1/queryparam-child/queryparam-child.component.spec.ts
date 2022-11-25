import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryparamChildComponent } from './queryparam-child.component';

describe('QueryparamChildComponent', () => {
  let component: QueryparamChildComponent;
  let fixture: ComponentFixture<QueryparamChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryparamChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryparamChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
