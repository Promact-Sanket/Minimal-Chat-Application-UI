import { Component, OnInit } from '@angular/core';
import { MinimalChatServiceService } from '../services/minimal-chat-service.service';

@Component({
  selector: 'app-log-history',
  templateUrl: './log-history.component.html',
  styleUrls: ['./log-history.component.scss']
})
export class LogHistoryComponent implements OnInit{

  selectedFromTime: Date = new Date();
  selectedToTime: Date = new Date();
  logHistory:any=[];
  constructor(private _service:MinimalChatServiceService,
    ){}

ngOnInit(): void {
  this._service.getLog().subscribe((res)=>{
    this.logHistory=res,
    console.log(res)
  }
  );
}

// onTimeChange(newTime: Date): void {
//   this.selectedTime = newTime;
// }

}
