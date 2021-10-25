import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActCategoriesComponent } from './act-categories.component';

describe('ActCategoriesComponent', () => {
  let component: ActCategoriesComponent;
  let fixture: ComponentFixture<ActCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
