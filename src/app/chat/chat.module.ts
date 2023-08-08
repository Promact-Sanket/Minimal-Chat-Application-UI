import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ConHistoryComponent } from './con-history/con-history.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    UserListComponent,
    DashBoardComponent,
    ConHistoryComponent   
     
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ChatModule { }
