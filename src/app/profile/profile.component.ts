import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Conversation } from '../shared/Conversation';
import { ConversationService } from '../shared/conversation.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  conversationsObs$: Observable<Conversation[]>;

  constructor(private conversationService: ConversationService) { }

  ngOnInit(): void {
  }

}
