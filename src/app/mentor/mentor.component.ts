import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/User';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.scss']
})
export class MentorComponent implements OnInit {

  usersObs$: Observable<User[]>;
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllMentor();
  }

  getAllUsers() {
    this.usersObs$ = this.userService.getAllUsers();
  }

  getAllMentor() {
    this.usersObs$ = this.userService.getAllMentor();
  }

  getAllMentored() {
    this.usersObs$ = this.userService.getAllMentored();
  }

}
