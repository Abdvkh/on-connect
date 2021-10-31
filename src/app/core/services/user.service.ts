import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { BehaviorSubject } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService extends EntityCollectionServiceBase<User> {
  private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject([
    { id: 1, username: 'admin', password: 'admin' },
    { id: 2, username: 'user', password: 'user' }
  ]);

  users = this.usersSubject.value;
  users$ = this.usersSubject.asObservable();

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('User', serviceElementsFactory);
  }

  push(user: User) {
    this.usersSubject.next([...this.users, user]);
  }
}
