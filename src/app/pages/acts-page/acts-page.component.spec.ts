import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActsPageComponent } from './acts-page.component';

describe('ActsPageComponent', () => {
  let component: ActsPageComponent;
  let fixture: ComponentFixture<ActsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
