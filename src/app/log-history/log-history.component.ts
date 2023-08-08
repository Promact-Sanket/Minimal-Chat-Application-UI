import { Component, OnInit } from '@angular/core';
import { MinimalChatServiceService } from '../services/minimal-chat-service.service';
import { ReqLog } from '../model/interface.model';

@Component({
  selector: 'app-log-history',
  templateUrl: './log-history.component.html',
  styleUrls: ['./log-history.component.scss']
})
export class LogHistoryComponent implements OnInit {

  selectedFromTime: string = new Date().toUTCString();
  selectedToTime: string = new Date().toUTCString();
  logHistory: any = [];
  isdropdownshow = true;
  constructor(private _service: MinimalChatServiceService,
  ) { }

  ngOnInit(): void {
    this.selectedFromTime = new Date((new Date()).getTime() - 5 * 60 * 1000).toUTCString(); //defualt 5 min before log logic
    const logobj = this.CreaterLogObj();
    this.getLogHistory(logobj);
  }

  // get log history from service
  getLogHistory(logobj: ReqLog) {
    this._service.getLog(logobj).subscribe((res) => {
      this.logHistory = res
    });
  }

  // create the object for request log
  CreaterLogObj() {
    const logObj: ReqLog = {
      EndTime: this.selectedToTime,
      StartTime: this.selectedFromTime
    };
    return logObj;
  }

  // selection of dropdown event
  LogOptionSelect(event: any) {
    const min: number = event.target.value
    if (min != 0) {
      const now = new Date();
      this.selectedFromTime = new Date(now.getTime() - min * 60 * 1000).toUTCString();
      this.selectedToTime = now.toUTCString();
      const logobj = this.CreaterLogObj();
      this.getLogHistory(logobj);
      console.log(logobj);
    }
    else {
      this.isdropdownshow = false;
    }
  }

  // custom selection log history
  customLogHistory() {
    const logobj = this.CreaterLogObj();
    this.getLogHistory(logobj);
  }

}
