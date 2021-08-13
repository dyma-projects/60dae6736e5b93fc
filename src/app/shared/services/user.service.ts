import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([
    { nom: 'user1' },
    { nom: 'user2' },
    { nom: 'user3' }
  ]);

  constructor() { }

  public addUser(user: User): void {
    this.users$.next( [...this.users$.value, user]);
  }

  public deleteUser(index: number): void {
    this.users$.value.splice(index, 1);
    this.users$.next(this.users$.value);
  }
}
