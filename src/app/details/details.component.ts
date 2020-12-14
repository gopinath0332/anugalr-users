import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users/users.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {
  detail = {};
  color: String = "yellow";
  constructor(private userService: UsersService) {
    this.detail = this.userService.selectedUser;
  }

  ngOnInit(): void {
    console.log("on initi ", this.detail);
  }

}
