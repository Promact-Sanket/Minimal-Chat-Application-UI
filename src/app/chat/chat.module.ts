import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ConHistoryComponent } from './con-history/con-history.component';



@NgModule({
  declarations: [
    UserListComponent,
    DashBoardComponent,
    ConHistoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChatModule { }
