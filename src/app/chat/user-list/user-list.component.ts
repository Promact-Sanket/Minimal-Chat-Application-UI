import { Component, OnInit } from '@angular/core';
import { ResConHistory, ResUser } from 'src/app/model/interface.model';
import { MinimalChatServiceService } from 'src/app/services/minimal-chat-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  ResUserList: ResUser[] = [];

  constructor(private _services: MinimalChatServiceService) {   }

  ngOnInit(): void {
    this.getUserList();
  }


  /**get user list from services */
  getUserList() {
    this._services.getUserList().subscribe((res: ResUser[]) => {
      this.ResUserList = res
    },
      (err) => { console.warn(err) }
    );
  }

  /** get the conversation history and send to con-history component*/
  Conversation(oppUser: ResUser) {
   this._services.reciverUserDeatils.next(oppUser);
  }

}
