import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryparamParentComponent } from './queryparam-parent.component';

describe('QueryparamParentComponent', () => {
  let component: QueryparamParentComponent;
  let fixture: ComponentFixture<QueryparamParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryparamParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryparamParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
