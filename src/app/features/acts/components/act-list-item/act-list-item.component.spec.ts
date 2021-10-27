import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActListItemComponent } from './act-list-item.component';

describe('ActListItemComponent', () => {
  let component: ActListItemComponent;
  let fixture: ComponentFixture<ActListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActListItemComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
