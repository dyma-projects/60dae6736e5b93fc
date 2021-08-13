import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {Subscription} from 'rxjs';
import {User} from '../shared/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  public users: User[];
  private subscription: Subscription;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.subscription = this.userService.users$.subscribe((users: User[]) => {
      this.users = users;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public deleteUser(index: number) {
    this.userService.deleteUser(index);
  }
}
