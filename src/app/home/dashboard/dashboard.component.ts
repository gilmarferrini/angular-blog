import { UserService } from './../services/user.service';
import { TokenService } from './../services/token.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../users/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user!: User;

  constructor(
    private tokenService: TokenService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.user = this.userService.getUser()

    if (!this.user.avatar) {
      this.user.avatar = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    } else {
      this.user.avatar = "http://localhost:3333/files/" + this.user.avatar
    }
  }

  logout() {
    this.tokenService.removeToken();
    this.userService.removeUser()
  }
}
