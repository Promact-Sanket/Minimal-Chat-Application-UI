import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReqMessage, ResConHistory, ResUser } from 'src/app/model/interface.model';
import { MinimalChatServiceService } from 'src/app/services/minimal-chat-service.service';

@Component({
  selector: 'app-con-history',
  templateUrl: './con-history.component.html',
  styleUrls: ['./con-history.component.scss']
})
export class ConHistoryComponent implements OnInit {
  CurrentUser: any;
  message: any;
  ConHistory: ResConHistory[] = [];
  reciverUserDetils: ResUser = { userId: "", email: "", name: "" };
  isRightClick = false;
  RClickMessageId = "";
  isMessageEdit = false;
  editMessageId = "";
  editablemessage = "";
  constructor(private _services: MinimalChatServiceService,
    private _toaster: ToastrService) { }

  ngOnInit(): void {
    this.CurrentUser = localStorage.getItem('CurrentUserID');
    this.getReciverDetailsFromSubject();

  }

  /**get reciver details from subject assigned in userlist component */
  getReciverDetailsFromSubject() {
    this._services.reciverUserDeatils.subscribe((details: ResUser) => {
      this.reciverUserDetils = details
      this.getConHisHistory();
    });
  }

  /**get the conversation history from subject assigned in userlist component */
  getConHisHistory() {
const userId=this.reciverUserDetils.userId;
    console.log(userId); 
    this._services.getConHistory(userId).subscribe((res) => {
      this.ConHistory = res,     
      console.log("res",res);           
    },
      (err) => { console.warn(err)
       }
    );
  }

  /**send the message */
  sendMessage() {
    const msgObj: ReqMessage = {
      reciverId: this.reciverUserDetils.userId,
      content: this.message
    };
    if (msgObj.content != null && msgObj.reciverId != null) {
      this._services.sendMessage(msgObj).subscribe((res: ResConHistory) => {
        this.ConHistory.push(res);
        this.message = "";
      },
        (err) =>{ console.warn(err),
        this._toaster.error(err.error.message) }
      );
    }
  }

  /**to show the edit and delete button  */
  onMessageRightClick(event: MouseEvent, message: ResConHistory) {
    event.preventDefault();
    this.isRightClick = true;
    this.RClickMessageId = message.messageId;
  }

  /**hide the edit delete option on body click  */
  hideRightClickOption() {
    this.isRightClick = false;
    this.RClickMessageId = "";
  }

  /**edit the existing Message with inline editor  */
  showInlineeditor(message: ResConHistory) {
    this.isMessageEdit = true;
    this.editMessageId = message.messageId;
    this.editablemessage = message.content;
  }

  /**hide the inline content  */
  hideInlineeditor() {
    this.isMessageEdit = false;
    this.editMessageId = "";
    this.editablemessage = "";
  }

  /**edit the selected message */
  editMessage() {
    this._services.editmessage(this.editMessageId, this.editablemessage).subscribe((res) => {
      console.log(res),
      this.getConHisHistory();        
    },
      (err) =>{ console.error(err),
        this._toaster.error(err.error.message)  }
    );
    this.isMessageEdit = false;
    this.editMessageId = "";
    this.editablemessage = ""; 
      
  }

  deleteMessage(message: ResConHistory)
  {
    if (confirm("Are you sure you want to delete this message" )) {
    this._services.deleteMessage(message.messageId).subscribe((res)=>{
      console.log(res),
      this.getConHisHistory();
    },
    (err)=>{console.error(err),
      this._toaster.error(err.error.message) }
    );
  }
  }
}
