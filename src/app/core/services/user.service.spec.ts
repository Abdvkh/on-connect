import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { EntityDataModule, EntityDataModuleWithoutEffects } from '@ngrx/data';

import { UserService } from './user.service';
import { entityConfig } from 'src/app/entity-metadata';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        EntityDataModule.forRoot(entityConfig),
        EntityDataModuleWithoutEffects,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        HttpClientModule
      ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
