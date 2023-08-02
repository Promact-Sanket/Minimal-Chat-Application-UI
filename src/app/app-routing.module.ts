import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './user/log-in/log-in.component';
import { RegisterComponent } from './user/register/register.component';
import { UserListComponent } from './chat/user-list/user-list.component';
import { DashBoardComponent } from './chat/dash-board/dash-board.component';

const routes: Routes = [
  {
    path: 'login',   
    component:LogInComponent ,    
  },
  {
    path: 'register',   
    component:RegisterComponent ,    
  },
  {
    path: 'chat',   
    component:DashBoardComponent ,    
  },
  {
    path: '',   
    component:LogInComponent ,    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

