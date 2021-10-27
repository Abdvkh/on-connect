import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActDetailsComponent } from './act-details.component';

describe('ActDetailsComponent', () => {
  let component: ActDetailsComponent;
  let fixture: ComponentFixture<ActDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActDetailsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
