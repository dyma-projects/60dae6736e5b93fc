import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {UserService} from '../shared/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @ViewChild('input') public el: ElementRef;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
  }

  addUser() {
    const username = this.el.nativeElement.value;
    if (username) {
      this.userService.addUser({ nom: username});
      this.el.nativeElement.value = '';
    }
  }
}
