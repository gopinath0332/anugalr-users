import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  selectedUser = null;

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get("https://randomuser.me/api/?results=20");
  }
}
