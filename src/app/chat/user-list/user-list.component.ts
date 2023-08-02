import { Component, OnInit } from '@angular/core';
import { ReqConHistory, ResConHistory, ResUserList } from 'src/app/model/interface.model';
import { MinimalChatServiceService } from 'src/app/services/minimal-chat-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  UserList: ResUserList[] = [];

  constructor(private _services: MinimalChatServiceService) { }

  ngOnInit(): void {
    this._services.getUserList().subscribe((res: ResUserList[]) => {
      this.UserList = res,
        console.log(res)
    },
      (err) => { console.warn(err) }
    );
  }

  /** gets the conversation history with clicked UserID */
  Conversation(oppUserId: string) {
    const reqConHis: ReqConHistory = {
      userId: oppUserId,
      before:new Date(),
      count:20,
      sort:"asc"
    };

    this._services.getConHistory(reqConHis).subscribe((res:ResConHistory[])=>{
      console.log(res)
    },
    (err)=>{ console.warn(err) }
    );
  }

}
