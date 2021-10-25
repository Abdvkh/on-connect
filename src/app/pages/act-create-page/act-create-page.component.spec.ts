import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActCreatePageComponent } from './act-create-page.component';

describe('ActCreatePageComponent', () => {
  let component: ActCreatePageComponent;
  let fixture: ComponentFixture<ActCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
