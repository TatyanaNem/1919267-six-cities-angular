import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User | null>(null);

  public user$ = this.userSubject.asObservable().pipe(distinctUntilChanged());

  public isAuthorized$ = this.user$.pipe(map((user) => !!user));

  setUser(user: User | null) {
    this.userSubject.next(user);
  }
}
