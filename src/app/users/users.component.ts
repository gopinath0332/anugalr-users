import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UsersService } from "./users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
  users = [];

  constructor(private userService: UsersService, private router: Router) {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data.results;
    });
  }

  ngOnInit(): void {
  }

  onUserClick(user) {
    this.userService.selectedUser = user;
    this.router.navigate(["/detail"]);
  }

}
